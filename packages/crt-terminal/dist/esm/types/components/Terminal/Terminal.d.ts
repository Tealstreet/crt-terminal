/// <reference types="react" />
import { PrintableItem } from '../../API/printer';
import { PrinterConfig } from '../../hooks/terminal/usePrinter';
import { OnCommandCallback, ControllerQueue } from '../../hooks/useTerminalController';
import { SubscribeQueue } from '../../hooks/eventQueue/useSubscribeEventQueue';
import { LoaderConfig } from '../../hooks/terminal/useLoader';
declare type QueueInterface = ControllerQueue & SubscribeQueue;
interface TerminalProps {
    onCommand: OnCommandCallback;
    queue: QueueInterface;
    prompt?: string;
    cursorSymbol?: string;
    maxHistoryCommands?: number;
    banner?: PrintableItem;
    loader?: Partial<LoaderConfig>;
    printer?: Partial<PrinterConfig>;
    effects?: {
        scanner?: boolean;
        pixels?: boolean;
        screenEffects?: boolean;
        textEffects?: boolean;
    };
    focusOnMount?: boolean;
}
declare const Terminal: ({ onCommand, queue, banner, prompt, cursorSymbol, maxHistoryCommands, loader: { slides, loaderSpeed }, printer: { printerSpeed, charactersPerTick }, effects: { scanner, pixels, screenEffects, textEffects }, focusOnMount }: TerminalProps) => JSX.Element;
export type { TerminalProps };
export default Terminal;
