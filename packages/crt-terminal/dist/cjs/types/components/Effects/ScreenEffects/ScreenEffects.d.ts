import { PropsWithChildren } from 'react';
interface ScreenEffectsProps {
    enabled: boolean;
}
declare const ScreenEffects: ({ enabled, children, }: PropsWithChildren<ScreenEffectsProps>) => JSX.Element;
export type { ScreenEffectsProps };
export default ScreenEffects;
