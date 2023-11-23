import { KeyboardRequest, KeyboardResponse } from '../actions/actions';
declare const press: ({ newInput, renderValue, cursorPosition }: KeyboardRequest) => KeyboardResponse;
export { press };
