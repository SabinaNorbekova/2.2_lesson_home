import { add } from "./task3_add.js";
import { mul } from "./task3_mul.js";
import { sub } from "./task3_sub.js";
import { div } from "./task3.div.js";

const functionName = process.argv[2]
const valueA = process.argv[3]
const valueB = process.argv[4]

if (functionName == "add") {
    const res = add(valueA, valueB)
    console.log(res)
}
if (functionName == "sub") {
    const res = sub(valueA, valueB)
    console.log(res)
}
if (functionName == "mul") {
    const res = mul(valueA, valueB)
    console.log(res)
}
if (functionName == "div") {
    const res = div(valueA, valueB)
    console.log(res)
}
