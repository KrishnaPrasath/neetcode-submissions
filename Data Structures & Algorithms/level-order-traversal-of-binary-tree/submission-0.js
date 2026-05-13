/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    result = [];
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        // I need to use queue with BFS
        //[1,2,3,4,5,6,7]
        // 1 queue = [1] level = [1] queue = [2, 3] ans [[1]]
        // 1 queue = [2, 3] level = [2, 3] queue = [4, 5, 6, 7] ans [[1], [2, 3]]
        // 1 queue = [4, 5, 6, 7] level = [4, 5, 6, 7] queue = [] ans [[1], [2, 3], [4,5,6,7]]
        if(root === null) return [];

        let ans = [];
        let queue = [root];

        while(queue.length) {
            let level = [];
            let n = queue.length;
            for(let i = 0; i < n; i++) {
                const node = queue.shift();
                level.push(node.val);

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            ans.push(level);
        }

        return ans;
    }
}
