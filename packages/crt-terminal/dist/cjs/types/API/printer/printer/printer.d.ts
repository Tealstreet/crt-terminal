/// <reference types="node" />
import { Nullable } from '../../../utils/helpers';
import { Lines } from '../../sentence/sentence';
declare type Printer = Lines[];
declare type PrintableItem = Lines[];
interface PrinterRequest {
    remainingLines: PrintableItem;
    printedLines: PrintableItem;
    wordFullyPrinted: boolean;
    newLine: boolean;
    state: Printer;
    charactersToPrint: number;
}
interface PrinterResponse {
    remainingLines: Nullable<PrintableItem>;
    printedLines: PrintableItem;
    wordFullyPrinted: boolean;
    newLine: boolean;
    state: Printer;
}
declare const printer: ({ remainingLines, printedLines, state: prevState, wordFullyPrinted, newLine, charactersToPrint, }: PrinterRequest) => PrinterResponse;
declare const createPrinterTask: (nextPrint: () => void, printerSpeed: number) => NodeJS.Timeout;
export type { Printer, PrintableItem, PrinterRequest, PrinterResponse };
export { printer, createPrinterTask };
