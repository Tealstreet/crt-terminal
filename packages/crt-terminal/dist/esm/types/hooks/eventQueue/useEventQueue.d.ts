import { PrintableItem } from '../../API/printer';
import { PrinterEvents, ClearEvent, PrintEvent } from './printerQueue/usePrinterQueue';
import { TerminalEvents, FocusEvent, LockEvent, LoadingEvent } from './terminalQueue/useTerminalQueue';
declare type InterfaceEvent = FocusEvent | ClearEvent | PrintEvent | LockEvent | LoadingEvent;
declare type EventQueue = InterfaceEvent[];
declare type EventQueueReturnType = ReturnType<typeof useEventQueue>;
declare function useEventQueue(): {
    state: EventQueue;
    api: {
        enqueue: (event: InterfaceEvent) => void;
        dequeue: (afterDequeue: () => void) => void;
        nextEvent: () => InterfaceEvent | undefined;
    };
    handlers: {
        print: (payload: PrintableItem) => void;
        clear: () => void;
        focus: () => void;
        lock: (payload: boolean) => void;
        loading: (payload: boolean) => void;
    };
};
export type { EventQueue, InterfaceEvent, EventQueueReturnType };
export { useEventQueue, PrinterEvents, TerminalEvents };
