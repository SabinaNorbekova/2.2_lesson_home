import os from "os"

export function getUptime() {
    const seconds = os.uptime()
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours} soat ${minutes} daqiqa`
}