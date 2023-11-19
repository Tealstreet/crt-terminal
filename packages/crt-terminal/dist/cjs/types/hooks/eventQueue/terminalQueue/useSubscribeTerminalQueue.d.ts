import { TerminalControllerReturnType } from '../../useTerminalController';
import { TerminalQueueReturnType } from './useTerminalQueue';
declare type ControllerTerminalHandlers = Pick<TerminalControllerReturnType['handlers'], 'focus' | 'loading' | 'lock'>;
interface SubscribeQueueProps {
    controller: ControllerTerminalHandlers;
    queue: TerminalQueueReturnType;
}
declare type SubscribeQueueReturnType = ReturnType<typeof useSubscribeTerminalQueue>;
declare function useSubscribeTerminalQueue({ controller: { focus, loading, lock }, queue: { state: queueState, handlers: { dequeue, nextEvent }, }, }: SubscribeQueueProps): void;
export type { SubscribeQueueProps, SubscribeQueueReturnType };
export { useSubscribeTerminalQueue };
