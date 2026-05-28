class Solution {
    isAlphaNumeric(char) {
        const code = char.charCodeAt(0);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
        return true;
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0, j = s.length - 1;
        while(i < j) {
            while(i < j && !this.isAlphaNumeric(s[i])) i++;
            while(i < j && !this.isAlphaNumeric(s[j])) j--;
            
            if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    
            i++;
            j--;
        }

        return true;
    }
}
