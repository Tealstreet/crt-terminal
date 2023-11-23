/// <reference types="react" />
interface TerminalAppState {
    inputLocked: boolean;
}
declare type TerminalAppReturnType = ReturnType<typeof useTerminalApp>;
declare function useTerminalApp(): {
    state: {
        terminalRef: import("react").RefObject<HTMLInputElement>;
        inputLocked: boolean;
    };
    handlers: {
        lock: (locked: boolean) => void;
        scrollDown: () => void;
    };
};
export type { TerminalAppState, TerminalAppReturnType };
export { useTerminalApp };
