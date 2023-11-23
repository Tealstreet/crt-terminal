import { CommandsHistory, CommandsHistoryKey, Command } from '../../API/commands-history/commands-history';
declare type CommandHistoryState = {
    commandsHistory: CommandsHistory;
    cursorPosition: CommandsHistoryKey;
};
declare type CommandHistoryProps = {
    maxHistoryCommands: number;
    initCommandHistory?: CommandsHistory;
};
declare type CommandHistoryReturnType = ReturnType<typeof useCommandHistory>;
declare function useCommandHistory({ maxHistoryCommands, initCommandHistory }: CommandHistoryProps): {
    state: {
        commandsHistory: CommandsHistory;
    };
    handlers: {
        addCommand: (command: Command) => void;
        nextCommand: () => string;
        prevCommand: () => string;
    };
};
export type { CommandHistoryState, CommandHistoryProps, CommandHistoryReturnType };
export { useCommandHistory };
