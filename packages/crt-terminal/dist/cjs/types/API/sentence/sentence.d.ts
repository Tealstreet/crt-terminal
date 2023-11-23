/// <reference types="react" />
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
export type { AnchorWord, TextWord, ButtonWord, Words, TextLine, CommandLine, Lines };
export { WordTypes, LineTypes, textWord, buttonWord, commandWord, anchorWord, commandLine, textLine, };
