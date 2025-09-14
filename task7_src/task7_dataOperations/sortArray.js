export function sortArray(arr, order = "asc") {
    const allNumbers = arr.every(el => !isNaN(Number(el)))
    let sorted;
    if (allNumbers) {
        sorted = arr.map(Number).sort((a, b) => a - b)
    } else {
        sorted = [...arr].sort((a, b) => String(a).localeCompare(String(b)))
    }
    if (order === "desc") sorted.reverse()
    return sorted
}
