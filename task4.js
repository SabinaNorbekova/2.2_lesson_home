import os from "os"
const args = process.argv[2]

if (args == "check-memory") {
    const freeMemory = os.freemem()
    const totalMemory = os.totalmem()
    const freeMB = (freeMemory / 1024 / 1024).toFixed(2)
    const freeGB = (freeMemory / 1024 / 1024 / 1024).toFixed(2)

    console.log(`Free Memory: ${freeMB} MB / ${freeGB} GB`)
    console.log(`Total Memory: ${(totalMemory / 1024 / 1024 / 1024).toFixed(2)} GB`)
} else {
    console.log(`No command provided`)
}