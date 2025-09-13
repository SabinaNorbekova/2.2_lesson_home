import { platform, version } from "os";
import { memoryUsage } from "process";

export function getProcessInfo() {
    return {
        pid: process.pid,
        version: process.version,
        platform: process.platform,
        memoryUsage: process.memoryUsage()
    }
}