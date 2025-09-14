import { objectToArray, arrayToObject,stringToBoolean } from "./task6_converts/index.js";
const [,,type,value]=process.argv
switch(type){
    case "Object":
        console.log(objectToArray(JSON.parse(value)))
        break
    case "Array":
        console.log(arrayToObject(JSON.parse(value)))
        break
    case "String":
        console.log(stringToBoolean(JSON.parse(value)))
        break
    case "Boolean":
        console.log(Boolean(Number(value)))
        break
    default:
        console.log(`noma'lum type`)
}