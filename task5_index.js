import { uptime } from "process"
import { getFreeMemory } from "./task5_memory.js"
import { getProcessInfo } from "./task5_process.js"
import { getUptime } from "./task5_uptime.js"

export function getSystemInfo() {
    return {
        memory: getFreeMemory(),
        process: getProcessInfo(),
        uptime: getUptime()
    }
}