import { Nullable } from '../../../utils/helpers';
import type { Lines } from '../../sentence/sentence';
interface PrintLineRequest {
    remainingLine: Lines;
    printedLine: Lines;
    charactersToPrint: number;
    wordFullyPrinted: boolean;
}
interface PrintLineResponse {
    remainingLine: Nullable<Lines>;
    printedLine: Lines;
    wordFullyPrinted: boolean;
}
declare const printLine: ({ remainingLine, printedLine, charactersToPrint, wordFullyPrinted: wordFullyPrintedPrev, }: PrintLineRequest) => PrintLineResponse;
export type { PrintLineRequest, PrintLineResponse };
export { printLine };
