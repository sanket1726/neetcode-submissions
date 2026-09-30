class Solution {
    // const hash =  
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";

        for (let str of strs) {
            // Append the length, the delimiter, and the string
            encodedString += str.length + "#" + str;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            // Find where the delimiter '#' is located starting from index i
            let delimiterIndex = str.indexOf('#', i);

            // Parse the length of the upcoming string
            let length = parseInt(str.substring(i, delimiterIndex), 10);

            // Move pointer past the '#' delimiter
            i = delimiterIndex + 1;

            // Extract the actual string using the parsed length
            let strs = str.substring(i, i + length);
            result.push(strs);

            // Move pointer to the start of the next encoded block
            i += length;
        }

        return result;
    }
}
