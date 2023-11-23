declare enum TerminalEvents {
    FOCUS = "FOCUS",
    LOCK = "LOCK",
    LOADING = "LOADING"
}
interface FocusEvent {
    type: TerminalEvents.FOCUS;
}
interface LockEvent {
    type: TerminalEvents.LOCK;
    payload: boolean;
}
interface LoadingEvent {
    type: TerminalEvents.LOADING;
    payload: boolean;
}
declare type TerminalQueueEvents = FocusEvent | LockEvent | LoadingEvent;
declare type TerminalQueue = TerminalQueueEvents[];
declare type TerminalQueueReturnType = ReturnType<typeof useTerminalQueue>;
declare function useTerminalQueue(): {
    state: TerminalQueue;
    handlers: {
        focus: () => void;
        lock: (payload: boolean) => void;
        loading: (payload: boolean) => void;
        dequeue: (afterDequeue: () => void) => void;
        nextEvent: () => TerminalQueueEvents | undefined;
    };
};
export type { FocusEvent, LockEvent, LoadingEvent, TerminalQueueEvents, TerminalQueueReturnType };
export { useTerminalQueue, TerminalEvents };
