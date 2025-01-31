import {useEffect, useState} from 'react';
import {
  add,
  next,
  prev,
  CommandsHistory,
  CommandsHistoryKey,
  Command,
} from '../../API/commands-history/commands-history';

type CommandHistoryState = {
  commandsHistory: CommandsHistory;
  cursorPosition: CommandsHistoryKey;
};

type CommandHistoryProps = {
  maxHistoryCommands: number;
  initCommandHistory?: CommandsHistory;
};

type CommandHistoryReturnType = ReturnType<typeof useCommandHistory>;

const defaultState: CommandHistoryState = {
  commandsHistory: [],
  cursorPosition: 0,
};

function useCommandHistory({ maxHistoryCommands, initCommandHistory }: CommandHistoryProps) {
  const [commandsHistory, setCommandsHistory] = useState<CommandsHistory>(
      defaultState.commandsHistory,
  );
  const [cursorPosition, setCursorPosition] = useState<CommandsHistoryKey>(
    defaultState.cursorPosition,
  );

  const setState = ({
    commandsHistory: newCommandsHistory,
    cursorPosition: newCursorPosition,
  }: CommandHistoryState) => {
    if (commandsHistory !== newCommandsHistory) setCommandsHistory(newCommandsHistory);
    if (cursorPosition !== newCursorPosition) setCursorPosition(newCursorPosition);
  };

  const addCommand = (command: Command) => {
    setState(add({ maxHistoryCommands, commandsHistory, command }));
  };

  useEffect(() => {
    let newCommandsHistory = commandsHistory;
    let newCursorPosition = cursorPosition;
    if (initCommandHistory) {
      initCommandHistory.forEach((command) => {
          // eslint-disable-next-line
        const { commandsHistory: _commandsHistory, cursorPosition: _cursorPosition } =  add({ maxHistoryCommands, commandsHistory: newCommandsHistory, command })
        newCommandsHistory = _commandsHistory;
        newCursorPosition = _cursorPosition;
      });
    }
    setState({ commandsHistory: newCommandsHistory, cursorPosition: newCursorPosition });
    // eslint-disable-next-line
  }, []);


  const nextCommand = () => {
    const { command, ...rest } = next({
      commandsHistory,
      cursorPosition,
    });

    setState(rest);
    return command;
  };

  const prevCommand = () => {
    const { command, ...rest } = prev({
      commandsHistory,
      cursorPosition,
    });

    setState(rest);
    return command;
  };

  return {
    state: {
      commandsHistory,
    },
    handlers: {
      addCommand,
      nextCommand,
      prevCommand,
    },
  };
}

export type { CommandHistoryState, CommandHistoryProps, CommandHistoryReturnType };
export { useCommandHistory };
