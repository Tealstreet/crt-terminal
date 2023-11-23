/// <reference types="node" />
declare type Slide = string;
declare type Slides = Slide[];
interface LoaderResponse {
    slideIndex: number;
    slide: Slide;
}
interface LoaderRequest {
    slideIndex: number;
    slides: Slides;
}
declare const DEFAULT_SLIDE = "";
declare const DEFAULT_SLIDE_INDEX = -1;
declare const next: ({ slides, slideIndex }: LoaderRequest) => LoaderResponse;
declare const createLoader: (nextSlide: () => void, loaderSpeed: number) => NodeJS.Timeout;
export type { Slide, Slides, LoaderResponse, LoaderRequest };
export { next, createLoader, DEFAULT_SLIDE, DEFAULT_SLIDE_INDEX };
