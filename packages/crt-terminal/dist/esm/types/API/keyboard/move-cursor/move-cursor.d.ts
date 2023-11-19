import { Keyboard, KeyboardRequest, KeyboardResponse } from '../actions/actions';
declare const moveActions: readonly [Keyboard.ARROW_LEFT, Keyboard.ARROW_RIGHT, Keyboard.HOME, Keyboard.END];
declare type MoveActions = typeof moveActions[number];
declare const isMoveActions: (str: string) => str is Keyboard.ARROW_LEFT | Keyboard.ARROW_RIGHT | Keyboard.END | Keyboard.HOME;
declare const moveCursor: ({ renderValue, cursorPosition, inputValue }: KeyboardRequest, key: MoveActions) => KeyboardResponse;
export type { MoveActions };
export { moveCursor, isMoveActions };
