import { Nullable } from '../../../utils/helpers';
import type { Words } from '../../sentence/sentence';
interface PrintWordsRequest {
    remainingWords: Words[];
    printedWords: Words[];
    charactersToPrint: number;
}
interface PrintWordsResponse {
    remainingWords: Nullable<Words[]>;
    printedWords: Words[];
    wordFullyPrinted: boolean;
}
declare const printWords: ({ remainingWords, printedWords, charactersToPrint, }: PrintWordsRequest) => PrintWordsResponse;
export type { PrintWordsRequest, PrintWordsResponse };
export { printWords };
