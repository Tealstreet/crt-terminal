import { Keyboard, KeyboardRequest, KeyboardResponse } from '../actions/actions';
declare const removeActions: readonly [Keyboard.BACKSPACE, Keyboard.DELETE];
declare type RemoveActions = typeof removeActions[number];
declare const isRemoveActions: (str: string) => str is Keyboard.DELETE | Keyboard.BACKSPACE;
declare const remove: (props: KeyboardRequest, key: RemoveActions) => KeyboardResponse;
export type { RemoveActions };
export { remove, isRemoveActions };
