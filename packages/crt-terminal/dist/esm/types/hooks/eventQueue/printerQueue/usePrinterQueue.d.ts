import { PrintableItem } from '../../../API/printer';
declare enum PrinterEvents {
    PRINT = "PRINT",
    CLEAR = "CLEAR"
}
interface ClearEvent {
    type: PrinterEvents.CLEAR;
}
interface PrintEvent {
    type: PrinterEvents.PRINT;
    payload: PrintableItem;
}
declare type PrinterQueueEvents = ClearEvent | PrintEvent;
declare type PrinterQueue = PrinterQueueEvents[];
declare type PrinterQueueReturnType = ReturnType<typeof usePrinterQueue>;
declare function usePrinterQueue(): {
    state: PrinterQueue;
    handlers: {
        print: (payload: PrintableItem) => void;
        clear: () => void;
        dequeue: (afterDequeue: () => void) => void;
        nextEvent: () => PrinterQueueEvents | undefined;
    };
};
export type { PrintEvent, ClearEvent, PrinterQueueEvents, PrinterQueueReturnType };
export { usePrinterQueue, PrinterEvents };
