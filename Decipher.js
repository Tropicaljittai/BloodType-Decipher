function digitalDecipher(b1, b2) {
    const key = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var result = ""
    const keyarr = Array.from(String(b2), Number);
    for (var i = 0; i < b1.length; i++) {
        result += key[((b1[i]+25 )- keyarr[i%keyarr.length])%26];
    }
    console.log(result);
}
digitalDecipher([20, 12, 18, 30, 21], 1939);
digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990);
digitalDecipher([6, 4, 1, 3, 9, 20], 100);
