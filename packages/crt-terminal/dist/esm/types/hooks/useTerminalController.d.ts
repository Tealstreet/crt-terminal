import { PreventProps } from '../API/keyboard';
import { PrintableItem } from '../API/printer';
import { CommandLineInputReturnType } from './terminal/useCommandLineInput';
import { CommandLineReturnType } from './terminal/useCommandLine';
import { CommandScreenReturnType } from './terminal/useCommandScreen';
import { CommandHistoryReturnType } from './terminal/useCommandHistory';
import { LoaderReturnType } from './terminal/useLoader';
import { TerminalAppReturnType } from './terminal/useTerminalApp';
import { EventQueueReturnType } from './eventQueue/useEventQueue';
declare type InputControllerProps = {
    handlers: CommandLineInputReturnType['handlers'];
};
declare type CommandScreenProps = {
    handlers: CommandScreenReturnType['handlers'];
};
declare type CommandLLineControllerProps = CommandLineReturnType;
interface KeyboardKeyDownEvent extends PreventProps {
    key: string;
}
declare type ControllerQueue = Pick<EventQueueReturnType, 'api'>;
declare type OnCommandCallback = (command: string) => void;
interface TerminalControllerProps {
    terminalApp: TerminalAppReturnType;
    input: InputControllerProps;
    commandLine: CommandLLineControllerProps;
    commandHistory: CommandHistoryReturnType;
    commandScreen: CommandScreenProps;
    loaderComponent: LoaderReturnType;
    interface: {
        prompt: string;
        banner?: PrintableItem;
        onCommand: OnCommandCallback;
        queue: ControllerQueue;
    };
    focusOnMount: boolean;
}
declare type TerminalControllerReturnType = ReturnType<typeof useTerminalController>;
declare function useTerminalController({ terminalApp: { state: { inputLocked }, handlers: { lock: lockApp }, }, input: { handlers: { setInputCursor, focus: focusInput }, }, commandScreen: { handlers: { print: printOnScreen, clear: clearScreen }, }, commandLine: { state: { cursorPosition, inputValue }, handlers: { preventDefault, addCharacter, removeCharacter, moveCommandCursor, submitCommand, provideCommandService, }, }, commandHistory: { handlers: { addCommand, nextCommand, prevCommand }, }, loaderComponent: { isLoading: loaderLoading, handlers: { startLoading: startComponentLoading, endLoading: endComponentLoading }, }, interface: { onCommand, prompt, banner, queue: { api: { enqueue }, }, }, focusOnMount, }: TerminalControllerProps): {
    handlers: {
        focus: () => void;
        lock: (locked: boolean) => void;
        clear: () => void;
        print: (line: PrintableItem) => Promise<void>;
        handleInputChange: (newInput: string) => void;
        handleKeyboardDown: (event: KeyboardKeyDownEvent) => void;
        loading: (loadingState: boolean) => void;
    };
};
export type { TerminalControllerReturnType, TerminalControllerProps, OnCommandCallback, ControllerQueue, };
export { useTerminalController };
