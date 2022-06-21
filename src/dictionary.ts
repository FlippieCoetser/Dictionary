/**
* @module Dictionary
*/

export class Dictionary<T> {
    private _items: {[index: string]: T} = {};
    public add = (key: string, value: T) => this._items[key] = value;
    public get = (key: string): T => this._items[key];
    public remove = (key: string): boolean => delete this._items[key];
    public containsKey = (key: string): boolean => this._items.hasOwnProperty(key);    
    public count = (): number => Object.keys(this._items).length
    public keys = (): string[] => Object.keys(this._items);
    public values = (): T[] => Object.keys(this._items).map(key => this._items[key]);
}