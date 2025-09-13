// 1-vazifa
// Caesar Shifri Yordamchisi
// Masala tavsifi:
// Sizdan Caesar shifri usulida matn kodlash va dekodlashni amalga oshiradigan JavaScript sinfi yaratish talab qilinadi. Caesar shifri har bir harfni alifboda ma'lum
// bir son bilan oldinga siljitish orqali ishlaydi. Siz yaratgan sinf, berilgan satr uchun har bir harfni alifbodagi ma'lum bir o'rin bilan oldinga yoki orqaga
// siljitib, shu tarzda kodlangan yoki dekodlangan matnni qaytarishi kerak.
// Vazifalar
// 1. CaesarCipher deb nomlangan classni yarating.
// 2. Sinfga shift deb nomlangan konstruktor parametri qo'shing, bu parametr shifr necha pozitsiya bilan siljishini aniqlaydi.
// 3. encode metodini yarating, bu metod berilgan matnni kodlaydi.
// 4. decode metodini yarating, bu metod berilgan kodlangan matnni dekodlaydi.
// 5. Agar matnda harf bo'lmagan belgilar (masalan, tinish belgilari, bo'sh joylar) bo'lsa, ularni o'zgarmasdan qoldiring.
// 6. Shifr doimiy [1, 26] oralig'ida bo'ladi.
// var c = new CaesarCipher(5); / CaesarCipher classni 5 pozitsiya siljish bilan yaratadi
// console.log(c.encode('Codewars')); / 'HTIJBFWX' ni qaytaradi
// console.log(c.decode('BFKKQJX')); / 'WAFFLES' ni qaytaradi
class CaesarCipher {
    constructor(shift) {
        this.shift = shift % 26;
    }
    encode(str) {
        return str
            .toUpperCase()
            .split("")
            .map(ch => {
                if (ch >= "A" && ch <= "Z") {
                    let code = ch.charCodeAt(0);
                    let shifted = ((code - 65 + this.shift) % 26) + 65
                    return String.fromCharCode(shifted);
                }
                return ch
            })
            .join("");
    }
    decode(str) {
        return str
            .toUpperCase()
            .split("")
            .map(ch => {
                if (ch >= "A" && ch <= "Z") {
                    let code = ch.charCodeAt(0)
                    let shifted = ((code - 65 - this.shift + 26) % 26) + 65
                    return String.fromCharCode(shifted);
                }
                return ch
            })
            .join("")
    }
}

let c = new CaesarCipher(5);
console.log(c.encode("Codewars")); // HTIJBFWX
console.log(c.decode("BFKKQJX")); // WAFFLES
