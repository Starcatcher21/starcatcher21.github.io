export default function translate( string, lang ) {
    let NString = ""
    for (const char of string) {
        NString += lang[char] || char;
    };
    if (NString === string) {
        NString = ''
        let char2 = ''
        for (const char of string) {
            if (char === " ") {
                NString += " "
                continue
            }
            const foundKey = Object.keys(lang).find(key => lang[key] === char);
            if (!foundKey) {
                char2 += char
                const foundKey2 = Object.keys(lang).find(key => lang[key] === char2);
                if (foundKey2 in lang) {
                    char2 = ''
                    NString += foundKey2
                }
            } else {
                NString += foundKey || char;
            }
        }
        return NString
    } else {
        return NString
    }
}
