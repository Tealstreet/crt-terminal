declare type Command = string;
declare type CommandsHistory = Command[];
declare type CommandsHistoryKey = number;
declare const DEFAULT_COMMAND: Command;
interface HistoryActionBaseProps {
    commandsHistory: CommandsHistory;
    cursorPosition: CommandsHistoryKey;
}
interface HistoryActionBaseReturnType {
    commandsHistory: CommandsHistory;
    cursorPosition: CommandsHistoryKey;
}
interface HistoryCursorMoveReturnType extends HistoryActionBaseReturnType {
    command: Command;
}
declare const next: ({ commandsHistory, cursorPosition: oldCursorPosition, }: HistoryActionBaseProps) => HistoryCursorMoveReturnType;
declare const prev: ({ commandsHistory, cursorPosition: oldCursorPosition, }: HistoryActionBaseProps) => HistoryCursorMoveReturnType;
interface HistoryAddProps {
    commandsHistory: CommandsHistory;
    command: Command;
    maxHistoryCommands: number;
}
declare const add: ({ commandsHistory, command, maxHistoryCommands, }: HistoryAddProps) => HistoryActionBaseReturnType;
export type { CommandsHistory, Command, CommandsHistoryKey };
export { next, prev, add, DEFAULT_COMMAND };
