export type Merge<T, P> = P & Omit<T, keyof P>;

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type Dict<T = any> = Record<string, T>;
