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
    validateBST(root, minVal, maxVal) {
        if(root === null) return true;

        if(root.val <= minVal || root.val >= maxVal) return false;

        return this.validateBST(root.left, minVal, root.val) 
            && this.validateBST(root.right, root.val, maxVal);
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        return this.validateBST(root, -Infinity, Infinity)        
    }
}
