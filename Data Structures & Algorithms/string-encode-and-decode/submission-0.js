class Solution {
    /**
     * Converts a single string into ASCII numbers joined by 'f'
     * e.g., "Hi" -> "72f105"
     */
    replace(str) {
        if (str.length === 0) return "";
        let codes = [];
        for (let i = 0; i < str.length; i++) {
            codes.push(str.charCodeAt(i));
        }
        return codes.join("f");
    }

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // Handle empty input array edge case
        if (strs.length === 0) return "__EMPTY_LIST__";

        // Encode each word with ASCII codes, then join words using 'W'
        let encodedWords = [];
        for (let str of strs) {
            encodedWords.push(this.replace(str));
        }

        // e.g., ["Hi", "Bye"] -> "72f105W66f121f101"
        return encodedWords.join("W");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "__EMPTY_LIST__") return [];

        // 1. Split by 'W' to separate each word
        let encodedWords = str.split("W");
        let result = [];

        for (let word of encodedWords) {
            // An empty string word represents ""
            if (word === "") {
                result.push("");
                continue;
            }

            // 2. Split by 'f' to get each ASCII number
            let asciiCodes = word.split("f");
            let reconstructedWord = "";

            for (let code of asciiCodes) {
                reconstructedWord += String.fromCharCode(Number(code));
            }

            result.push(reconstructedWord);
        }

        return result;
    }
}