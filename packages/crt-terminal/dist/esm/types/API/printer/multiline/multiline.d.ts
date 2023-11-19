import { Nullable } from '../../../utils/helpers';
import type { Lines } from '../../sentence/sentence';
import type { PrintableItem } from '../printer/printer';
interface PrintMultilineRequest {
    remainingLines: PrintableItem;
    printedLines: PrintableItem;
    wordFullyPrinted: boolean;
    newLine: boolean;
    charactersToPrint: number;
}
interface PrintMultilineResponse {
    newLine: boolean;
    wordFullyPrinted: boolean;
    printedLines: Lines[];
    remainingLines: Nullable<Lines[]>;
}
declare const printMultiline: ({ remainingLines, printedLines, wordFullyPrinted, newLine, charactersToPrint, }: PrintMultilineRequest) => PrintMultilineResponse;
export type { PrintMultilineRequest, PrintMultilineResponse };
export { printMultiline };
