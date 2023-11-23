/// <reference types="react" />
interface CommandLineInputProps {
}
declare type CommandLineInputReturnType = ReturnType<typeof useCommandLineInput>;
declare function useCommandLineInput(): {
    state: {
        inputElementRef: import("react").RefObject<HTMLInputElement>;
    };
    handlers: {
        focus: () => void | undefined;
        setInputCursor: (cursorPosition: number) => void;
    };
};
export type { CommandLineInputProps, CommandLineInputReturnType };
export { useCommandLineInput };
