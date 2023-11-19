import { CommandHistoryReturnType } from '../../../hooks/terminal/useCommandHistory';
import { Keyboard, KeyboardRequest, KeyboardResponse } from '../actions/actions';
declare const serviceActions: readonly [Keyboard.ARROW_UP, Keyboard.ARROW_DOWN];
declare type ServiceActions = typeof serviceActions[number];
declare const isServiceActions: (str: string) => str is Keyboard.ARROW_DOWN | Keyboard.ARROW_UP;
declare type NextCommand = CommandHistoryReturnType['handlers']['nextCommand'];
declare type PrevCommand = CommandHistoryReturnType['handlers']['prevCommand'];
interface KnownServices {
    nextCommand: NextCommand;
    prevCommand: PrevCommand;
}
declare type ProvideServiceProps = KeyboardRequest & {
    services: KnownServices;
};
declare const provideService: ({ renderValue, inputValue, cursorPosition, services: { nextCommand, prevCommand }, }: ProvideServiceProps, key: ServiceActions) => KeyboardResponse;
export type { ServiceActions, KnownServices };
export { provideService, isServiceActions };
