import {Dictionary} from "../src/dictionary.js";
type T = string;

describe("Given Dictionary<T>", () => {
    describe("When ! add()",()=> {
        it("Then get(key) should eql undefined", () => {
            let dictionary = new Dictionary<T>();
            let key = dictionary.get("key");
            expect(key).toBeUndefined; 
        });
        it("Then count() should eql 0", () => {
            let dictionary = new Dictionary<T>();
            let count = dictionary.count();
            expect(count).toEqual(0) 
        });
    });
    describe("When add(key,value)", () => {
        it("Then containsKey(key) should eql true", () => {
            let dictionary = new Dictionary<T>();
            dictionary.add('key','value');
            let hasKey = dictionary.containsKey("key");
            expect(hasKey).toEqual(true); 
        });
        it("Then get(key) should eql value", () => {
            let dictionary = new Dictionary<T>();
            dictionary.add('key','value');
            let value = dictionary.get("key");
            expect(value).toEqual("value"); 
        });
        it("Then keys() should eql [key]", () => {
            let dictionary = new Dictionary<T>();
            dictionary.add('key','value');
            let keys = dictionary.keys();
            expect(keys).toEqual(["key"]); 
        });
        it("Then value() should eql [value]", () => {
            let dictionary = new Dictionary<T>();
            dictionary.add('key','value');
            let values = dictionary.values();
            expect(values).toEqual(["value"]); 
        });
        describe("Given add(key2, value2)", () => {
            it("Then count() should eql 2", () => {
                let dictionary = new Dictionary<T>();
                dictionary.add('key','value');
                dictionary.add('key2','value2');
                let count = dictionary.count();
                expect(count).toEqual(2); 
            });
            it("Then Keys() should eql to [key,key2]", () => {
                let dictionary = new Dictionary<T>();
                dictionary.add('key','value');
                dictionary.add('key2','value2');
                let keys = dictionary.keys();
                expect(keys).toEqual(["key", "key2"]); 
            });
            it("Then Values() should eql [value,value2]", () => {
                let dictionary = new Dictionary<T>();
                dictionary.add('key','value');
                dictionary.add('key2','value2');
                let values = dictionary.values();
                expect(values).toEqual(["value", "value2"]); 
            });
            describe("When remove(key)",()=> {
                it("Then count() should eql 1", () => {
                    let dictionary = new Dictionary<T>();
                    dictionary.add('key','value');
                    dictionary.add('key2','value2');
                    let count = dictionary.count();
                    expect(count).toEqual(2);
                    dictionary.remove("key");
                    let count2 = dictionary.count();
                    expect(count2).toEqual(1);
                });
            });
        });
    })
});
