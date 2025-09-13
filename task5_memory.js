import os from "os"

export function getFreeMemory() {
    return (os.freemem() / 1024 / 1024).toFixed(2) + "MB"
}