class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length <= 1) return false;
        const stack = [];
        const map = new Map([
            [")", "("], 
            ["}", "{"], 
            ["]", "["]
        ]);

        for(const ch of s) {
            if(map.has(ch)) {
                const lastOpeningBrace = stack.pop();
                if(map.get(ch) !== lastOpeningBrace) return false;
            } else {
                stack.push(ch);
            }
        }

        if(stack.pop()) return false;
        return true;
    }
}

