import { Slides } from '../../API/loader/loader';
declare type LoaderReturnType = ReturnType<typeof useLoader>;
declare type SetStateCallback = (newInput: string) => void;
interface LoaderConfig {
    slides: Slides;
    loaderSpeed: number;
}
interface LoaderProps extends LoaderConfig {
    onSetOuterState: SetStateCallback;
}
declare function useLoader({ slides, loaderSpeed, onSetOuterState }: LoaderProps): {
    isLoading: boolean;
    handlers: {
        startLoading: () => void;
        endLoading: () => void;
    };
};
export type { LoaderProps, LoaderConfig, LoaderReturnType };
export { useLoader };
