import React from 'react';
import { CommandLine as CommandLineState } from '../../hooks/terminal/useCommandLine';
import { TerminalControllerReturnType } from '../../hooks/useTerminalController';
interface CommandLineProps {
    prompt: string;
    cursorSymbol: string;
    state: CommandLineState;
    handleKeyboardDown: TerminalControllerReturnType['handlers']['handleKeyboardDown'];
    handleInputChange: TerminalControllerReturnType['handlers']['handleInputChange'];
}
declare const CommandLine: React.ForwardRefExoticComponent<CommandLineProps & React.RefAttributes<HTMLInputElement>>;
export default CommandLine;
