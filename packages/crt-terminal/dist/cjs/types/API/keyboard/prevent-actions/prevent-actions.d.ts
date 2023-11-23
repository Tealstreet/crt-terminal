/// <reference types="react" />
import { Keyboard } from '../actions/actions';
declare const preventedActions: readonly [Keyboard.ARROW_DOWN, Keyboard.ARROW_LEFT, Keyboard.ARROW_RIGHT, Keyboard.ARROW_UP, Keyboard.END, Keyboard.HOME, Keyboard.PAGE_DOWN, Keyboard.PAGE_UP, Keyboard.DELETE, Keyboard.BACKSPACE, Keyboard.ENTER];
declare type PreventedActions = typeof preventedActions[number];
declare const isPreventedActions: (str: string) => str is Keyboard;
declare type PreventProps = Pick<React.KeyboardEvent, 'preventDefault'>;
declare const preventActions: (event: PreventProps) => void;
export type { PreventedActions, PreventProps };
export { preventActions, isPreventedActions };
