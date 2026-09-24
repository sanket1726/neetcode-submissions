class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of s) {

        // Opening bracket
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }

        // Closing bracket
        else {
            const top = stack.pop();

            if (top !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
    }
}
