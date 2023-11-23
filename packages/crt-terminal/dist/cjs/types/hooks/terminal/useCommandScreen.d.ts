import { PrinterProps } from './usePrinter';
declare type CommandScreenReturnType = ReturnType<typeof useCommandScreen>;
interface CommandScreenProps {
    printerConfig: PrinterProps;
}
declare function useCommandScreen({ printerConfig }: CommandScreenProps): {
    state: import("../../API/printer/printer/printer").Printer;
    handlers: {
        print: (line: import("../../API/printer/printer/printer").PrintableItem) => Promise<unknown>;
        clear: () => void;
    };
};
export type { CommandScreenReturnType };
export { useCommandScreen };
