/**
* @module Dictionary
*/
export declare class Dictionary<T> {
    private _items;
    add: (key: string, value: T) => T;
    get: (key: string) => T;
    remove: (key: string) => boolean;
    containsKey: (key: string) => boolean;
    count: () => number;
    keys: () => string[];
    values: () => T[];
}
