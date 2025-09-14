import { dataOperations } from "./task7_src/task7_index.js";
import { stringOperations } from "./task7_src/task7_index.js";

const [, , command, raw1, raw2] = process.argv;
function parseArrayArg(s) {
    if (!s) return [];
    try {
        return JSON.parse(s);
    } catch (e) {
        return s.split(",").map(item => item.trim());
    }
}
try {
    switch ((command || "").toLowerCase()) {
        case "filter": {
            const arr = parseArrayArg(raw1);
            const condition = raw2;
            const res = dataOperations.filterArray(arr, condition);
            console.log(res);
            break;
        }
        case "sort": {
            const arr = parseArrayArg(raw1);
            const order = raw2 || "asc";
            console.log(dataOperations.sortArray(arr, order));
            break;
        }
        case "ascii": {
            const text = raw1 || "";
            console.log(stringOperations.convertToASCII(text));
            break;
        }
        case "uppercase": {
            const text = raw1 || "";
            console.log(stringOperations.toUpperCase(text));
            break;
        }
        case "lowercase": {
            const text = raw1 || "";
            console.log(stringOperations.toLowerCase(text));
            break;
        }
        default:
            console.log("Unknown command. Use: filter, sort, ascii, uppercase, lowercase");
    }
} catch (err) {
    console.error("Error:", err.message);
}


//for check:
//node task7_main.js filter '[1,2,3,4,5]' 'x>4'
// node task7_main.js sort '[3,1,2]' asc
// node task7_main.js sort '[3,1,2]' desc
//node task7_main.js ascii "ABC"
//node task7_main.js uppercase "abc"
//node task7_main.js lowercase "ABC"