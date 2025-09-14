export function filterArray(arr, conditionStr) {
    if (!conditionStr) return arr;
    const m = conditionStr.trim().match(/^x\s*(>=|<=|>|<|==|===|!=)\s*(.+)$/);
    if (!m) throw new Error("Shart x>4 or x>=10 kabi bo'lishi kerak");
    const op = m[1];
    let rhsRaw = m[2].trim();
    let rhs;
    if (!isNaN(Number(rhsRaw))) {
        rhs = Number(rhsRaw);
    } else {
        try {
            rhs = JSON.parse(rhsRaw);
        } catch {
            rhs = rhsRaw.replace(/^['"]|['"]$/g, "");
        }
    }
    const cmp = (x) => {
        if (typeof rhs === "number") x = Number(x);
        switch (op) {
            case ">": return x > rhs;
            case "<": return x < rhs;
            case ">=": return x >= rhs;
            case "<=": return x <= rhs;
            case "==": return x == rhs;
            case "===": return x === rhs;
            case "!=": return x != rhs;
            default: throw new Error("Unsupported operator");
        }
    };
    return arr.filter(cmp);
}
