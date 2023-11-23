import { TerminalControllerReturnType } from '../useTerminalController';
import { EventQueueReturnType } from './useEventQueue';
declare type SubscribeQueue = Pick<EventQueueReturnType, 'api' | 'state'>;
interface SubscribeQueueProps {
    controller: TerminalControllerReturnType['handlers'];
    queue: SubscribeQueue;
}
declare type SubscribeQueueReturnType = ReturnType<typeof useSubscribeEventQueue>;
declare function useSubscribeEventQueue({ controller, queue: { state: queueState, api: { dequeue, nextEvent }, }, }: SubscribeQueueProps): void;
export type { SubscribeQueueProps, SubscribeQueueReturnType, SubscribeQueue };
export { useSubscribeEventQueue };
