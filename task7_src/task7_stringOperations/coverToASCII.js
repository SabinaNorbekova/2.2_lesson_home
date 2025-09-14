export function convertToASCII(str) {
    return [...String(str)].map(ch => ch.codePointAt(0));
}
