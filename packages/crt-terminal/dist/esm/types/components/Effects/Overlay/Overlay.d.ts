/// <reference types="react" />
interface OverlayProps {
    scanner: boolean;
    pixels: boolean;
}
declare const Overlay: ({ scanner, pixels }: OverlayProps) => JSX.Element;
export type { OverlayProps };
export default Overlay;
