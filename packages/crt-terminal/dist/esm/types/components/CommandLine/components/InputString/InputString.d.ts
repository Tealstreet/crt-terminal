import React from 'react';
import { RenderList } from '../../../../hooks/terminal/useCommandLine';
interface InputStringProps {
    cursorPosition: number;
    renderValue: RenderList;
}
declare const InputString: React.MemoExoticComponent<({ cursorPosition, renderValue }: InputStringProps) => JSX.Element>;
export default InputString;
