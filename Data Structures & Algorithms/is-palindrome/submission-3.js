class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        function isAlphaNumeric(s) {
            return /[a-zA-Z0-9]/.test(s);
        }

        while (left < right) {

            // Skip non-alphanumeric characters
            while (left < right && !isAlphaNumeric(s[left])) {
                left++;
            }

            while (left < right && !isAlphaNumeric(s[right])) {
                right--;
            }

            // Compare characters
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
