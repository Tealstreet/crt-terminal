import React from 'react';
import { Printer } from '../../API/printer';
interface TerminalScreenProps {
    state: Printer;
}
declare const TerminalScreen: React.MemoExoticComponent<({ state }: TerminalScreenProps) => JSX.Element>;
export default TerminalScreen;
