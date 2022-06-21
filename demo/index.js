import { Dictionary } from 'dictionary';
const dictionary = new Dictionary()

const key = 'key'
const value = 'value'

dictionary.add(key,value)
console.log(`Dictionary: add(${key},${value})`)
console.log(`Dictionary: get(${key}) returns: ${dictionary.get(key)}`)
