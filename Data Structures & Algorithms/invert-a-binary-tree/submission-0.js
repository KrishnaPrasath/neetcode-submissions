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
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if(root === null || root.left === null && root.right === null ) {
            return root;
        }

        const leftNode = this.invertTree(root.left); 
        const rightNode = this.invertTree(root.right);

        root.right = leftNode;
        root.left = rightNode;
        return root;
    }
}
