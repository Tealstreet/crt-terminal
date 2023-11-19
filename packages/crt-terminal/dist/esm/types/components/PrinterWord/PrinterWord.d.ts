import { PropsWithChildren } from 'react';
import { Words } from '../../API/sentence/sentence';
interface PrinterWordProps {
    word: Words;
}
declare const PrinterWord: ({ word, children }: PropsWithChildren<PrinterWordProps>) => JSX.Element;
export default PrinterWord;
