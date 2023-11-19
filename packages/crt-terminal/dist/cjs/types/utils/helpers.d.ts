declare const exhaustiveCheck: (msg: string) => (arg: never) => never;
declare type Nullable<T> = T | null;
export type { Nullable };
export { exhaustiveCheck };
