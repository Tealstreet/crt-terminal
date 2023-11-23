import { PropsWithChildren } from 'react';
interface CharacterProps {
    selected?: boolean;
    className?: string;
}
declare const Character: ({ children, selected, className, }: PropsWithChildren<CharacterProps>) => JSX.Element;
export default Character;
