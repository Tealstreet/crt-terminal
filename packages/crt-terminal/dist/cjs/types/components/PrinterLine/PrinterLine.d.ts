import { PropsWithChildren } from 'react';
import { Lines } from '../../API/sentence/sentence';
interface PrinterLineProps {
    line: Lines;
}
declare const PrinterLine: ({ line, children }: PropsWithChildren<PrinterLineProps>) => JSX.Element;
export default PrinterLine;
