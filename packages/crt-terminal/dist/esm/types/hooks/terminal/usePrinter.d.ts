import { PrintableItem } from '../../API/printer';
declare type PrinterReturnType = ReturnType<typeof usePrinter>;
interface PrinterConfig {
    printerSpeed: number;
    charactersPerTick: number;
}
interface PrinterProps extends PrinterConfig {
    afterPrintCallback: () => void;
}
declare function usePrinter({ printerSpeed, charactersPerTick, afterPrintCallback }: PrinterProps): {
    state: import("../../API/printer/printer/printer").Printer;
    handlers: {
        startPrint: (line: PrintableItem) => Promise<unknown>;
        clear: () => void;
    };
};
export type { PrinterReturnType, PrinterConfig, PrinterProps };
export { usePrinter };
