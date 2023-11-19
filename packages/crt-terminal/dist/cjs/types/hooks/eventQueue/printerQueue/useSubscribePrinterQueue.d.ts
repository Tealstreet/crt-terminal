import { TerminalControllerReturnType } from '../../useTerminalController';
import { PrinterQueueReturnType } from './usePrinterQueue';
declare type ControllerPrintHandlers = Pick<TerminalControllerReturnType['handlers'], 'clear' | 'print'>;
interface SubscribeQueueProps {
    controller: ControllerPrintHandlers;
    queue: PrinterQueueReturnType;
}
declare type SubscribeQueueReturnType = ReturnType<typeof useSubscribePrinterQueue>;
declare function useSubscribePrinterQueue({ controller: { clear, print }, queue: { state: queueState, handlers: { dequeue, nextEvent }, }, }: SubscribeQueueProps): void;
export type { SubscribeQueueProps, SubscribeQueueReturnType };
export { useSubscribePrinterQueue };
