/// <reference types="react" />
/// <reference types="node" />
declare type AnchorCallback = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
declare type ButtonCallback = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
declare enum WordTypes {
    ANCHOR = "ANCHOR",
    TEXT = "TEXT",
    BUTTON = "BUTTON",
    COMMAND = "COMMAND"
}
interface ElementBase {
    dataAttribute?: string;
    className?: string;
    id?: string;
}
interface BaseWord extends ElementBase {
    characters: string;
}
interface AnchorWord extends BaseWord {
    type: WordTypes.ANCHOR;
    href?: string;
    onClick?: AnchorCallback;
}
interface TextWord extends BaseWord {
    type: WordTypes.TEXT;
}
interface ButtonWord extends BaseWord {
    type: WordTypes.BUTTON;
    onClick?: ButtonCallback;
}
interface CommandWord extends BaseWord {
    type: WordTypes.COMMAND;
    prompt: string;
}
declare type Words = AnchorWord | TextWord | ButtonWord | CommandWord;
declare type AnchorProps = Omit<AnchorWord, 'type'>;
declare const anchorWord: ({ characters, href, onClick, dataAttribute, className, id, }: AnchorProps) => AnchorWord;
declare type TextProps = Omit<TextWord, 'type'>;
declare const textWord: ({ characters, dataAttribute, className, id }: TextProps) => TextWord;
declare type ButtonProps = Omit<ButtonWord, 'type'>;
declare const buttonWord: ({ characters, onClick, dataAttribute, className, id, }: ButtonProps) => ButtonWord;
declare type CommandProps = Omit<CommandWord, 'type'>;
declare const commandWord: ({ characters, prompt, dataAttribute, className, id, }: CommandProps) => CommandWord;
declare enum LineTypes {
    TEXT = "TEXT",
    COMMAND = "COMMAND"
}
interface BaseLine extends ElementBase {
    words: Words[];
}
interface TextLine extends BaseLine {
    type: LineTypes.TEXT;
}
interface CommandLine extends BaseLine {
    type: LineTypes.COMMAND;
}
declare type Lines = TextLine | CommandLine;
declare type CommandLineProps = Omit<CommandLine, 'type'>;
declare const commandLine: ({ words, dataAttribute, className, id }: CommandLineProps) => CommandLine;
declare type TextLineProps = Omit<TextLine, 'type'>;
declare const textLine: ({ words, dataAttribute, className, id }: TextLineProps) => TextLine;

declare type PrintableItem = Lines[];

interface PrinterConfig {
    printerSpeed: number;
    charactersPerTick: number;
}

declare type Slide = string;
declare type Slides = Slide[];

interface LoaderConfig {
    slides: Slides;
    loaderSpeed: number;
}

declare enum PrinterEvents {
    PRINT = "PRINT",
    CLEAR = "CLEAR"
}
interface ClearEvent {
    type: PrinterEvents.CLEAR;
}
interface PrintEvent {
    type: PrinterEvents.PRINT;
    payload: PrintableItem;
}

declare enum TerminalEvents {
    FOCUS = "FOCUS",
    LOCK = "LOCK",
    LOADING = "LOADING"
}
interface FocusEvent {
    type: TerminalEvents.FOCUS;
}
interface LockEvent {
    type: TerminalEvents.LOCK;
    payload: boolean;
}
interface LoadingEvent {
    type: TerminalEvents.LOADING;
    payload: boolean;
}

declare type InterfaceEvent = FocusEvent | ClearEvent | PrintEvent | LockEvent | LoadingEvent;
declare type EventQueue = InterfaceEvent[];
declare type EventQueueReturnType = ReturnType<typeof useEventQueue>;
declare function useEventQueue(): {
    state: EventQueue;
    api: {
        enqueue: (event: InterfaceEvent) => void;
        dequeue: (afterDequeue: () => void) => void;
        nextEvent: () => InterfaceEvent | undefined;
    };
    handlers: {
        print: (payload: PrintableItem) => void;
        clear: () => void;
        focus: () => void;
        lock: (payload: boolean) => void;
        loading: (payload: boolean) => void;
    };
};

declare type ControllerQueue = Pick<EventQueueReturnType, 'api'>;
declare type OnCommandCallback = (command: string) => void;

declare type SubscribeQueue = Pick<EventQueueReturnType, 'api' | 'state'>;

declare type QueueInterface = ControllerQueue & SubscribeQueue;
interface TerminalProps {
    onCommand: OnCommandCallback;
    queue: QueueInterface;
    prompt?: string;
    cursorSymbol?: string;
    maxHistoryCommands?: number;
    initCommandHistory?: string[];
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
declare const Terminal: ({ onCommand, queue, banner, prompt, cursorSymbol, maxHistoryCommands, initCommandHistory, loader: { slides, loaderSpeed }, printer: { printerSpeed, charactersPerTick }, effects: { scanner, pixels, screenEffects, textEffects }, focusOnMount }: TerminalProps) => JSX.Element;

export { AnchorWord, ButtonWord, CommandLine, EventQueue, EventQueueReturnType, InterfaceEvent, LineTypes, Lines, PrinterEvents, Terminal, TerminalEvents, TerminalProps, TextLine, TextWord, WordTypes, Words, anchorWord, buttonWord, commandLine, commandWord, textLine, textWord, useEventQueue };
