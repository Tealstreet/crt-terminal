import React, {useMemo} from 'react';
import { CommandLine as CommandLineState } from '../../hooks/terminal/useCommandLine';
import { TerminalControllerReturnType } from '../../hooks/useTerminalController';
import Character from '../Character/Character';
import InputString from './components/InputString/InputString';
import classes from './command-line.module.scss';

interface CommandLineProps {
  prompt: string;
  cursorSymbol: string;
  commandHistory: string[];
  setInput: (value: string) => void;
  state: CommandLineState;
  handleKeyboardDown: TerminalControllerReturnType['handlers']['handleKeyboardDown'];
  handleInputChange: TerminalControllerReturnType['handlers']['handleInputChange'];
}

const CommandLine = React.forwardRef<HTMLInputElement, CommandLineProps>(
  (
    {
      state: { cursorPosition, renderValue, inputValue },
      handleKeyboardDown,
      handleInputChange,
      prompt,
      cursorSymbol,
      commandHistory,
      setInput,
    },
    inputElement,
  ) => {
    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
      const {
        currentTarget: { value },
      } = event;
      handleInputChange(value);
    };

      // iterate over command history in reverse and check if any command in command history
      // starts with input value for auto complete
      const recommendedCommand = useMemo(() => {
          if (inputValue) {
              for (let i = commandHistory.length - 1; i >= 0; i--) {
                  const command = commandHistory[i];
                  if (command.startsWith(inputValue) && command !== inputValue) {
                      return command;
                  }
              }
          }
          return null;

      }, [commandHistory, inputValue]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // if key is right arrow and recommended command is available
        // set input value to recommended command
        if (event.key === 'ArrowRight' && recommendedCommand) {
            setInput(recommendedCommand);
            event.preventDefault();
            return;
        }

      handleKeyboardDown(event);
    };

    const lastSelected = cursorPosition === renderValue.length;



      return (
      <div className={[classes.commandLine, 'crt-command-line'].join(' ')}>
        <span className="crt-command-line__prompt">{prompt}</span>
        <div className={[classes.inputWrap, 'crt-command-line__input-wrapper'].join(' ')}>
          <input
            className={[classes.input, 'crt-command-line__input'].join(' ')}
            id="crt-command-line-input"
            ref={inputElement}
            value={inputValue}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            type="text"
          />
          <div className={[classes.inputString, 'crt-command-line__input-string'].join(' ')}>
            <InputString renderValue={renderValue} cursorPosition={cursorPosition} />
            {lastSelected && (
              <Character className="crt-cursor-symbol" selected>
                {cursorSymbol}
              </Character>
            )}
              {recommendedCommand && (
                  <span className={classes.inputStringRecommendation}>
                    <InputString renderValue={recommendedCommand.slice(inputValue.length).split('')}  cursorPosition={0}/>
                </span>
              )}
          </div>
        </div>
      </div>
    );
  },
);

export default CommandLine;
