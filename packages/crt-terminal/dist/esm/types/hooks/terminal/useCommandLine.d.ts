import { PreventProps, MoveActions, RemoveActions, ServiceActions, KnownServices } from '../../API/keyboard';
declare type RenderItem = string;
declare type RenderList = RenderItem[];
interface CommandLine {
    renderValue: RenderList;
    inputValue: string;
    cursorPosition: number;
}
declare type CommandLineReturnType = ReturnType<typeof useCommandLine>;
declare function useCommandLine(): {
    state: {
        inputValue: string;
        renderValue: RenderList;
        cursorPosition: number;
    };
    handlers: {
        preventDefault: (event: PreventProps) => void;
        addCharacter: (newInput: string) => void;
        setInput: (newInput: string) => void;
        moveCommandCursor: (key: MoveActions) => void;
        removeCharacter: (key: RemoveActions) => void;
        submitCommand: () => void;
        provideCommandService: (key: ServiceActions, services: KnownServices) => void;
    };
};
export type { CommandLine, RenderList, CommandLineReturnType };
export { useCommandLine };
