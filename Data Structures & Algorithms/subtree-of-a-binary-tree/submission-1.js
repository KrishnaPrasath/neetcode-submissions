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
    sameTree(head1, head2) {
        if(head1 === null && head2 === null) return true;
        if(head1 === null || head2 === null) return false;

        return head1.val === head2.val && this.sameTree(head1.left, head2.left) && this.sameTree(head1.right, head2.right);
    }
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(subRoot === null) return true;

        if(root === null) return false;

        if(this.sameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
