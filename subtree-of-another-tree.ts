https://leetcode.com/problems/subtree-of-another-tree/description/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    const rootNodes = [root]

    while(rootNodes.length > 0) {
        const node = rootNodes.pop()

        if(isEqual(node, subRoot)) {
            return true;
        }

        if (node != null) {
            rootNodes.push(node.right, node.left)
        }
    }

    return false
}

function isEqual(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if(root == null || subRoot == null) {
        return subRoot === root
    }

    if(root.left == null && subRoot.left == null && root.right == null && subRoot.right == null) {
        return subRoot.val === root.val
    }

    return subRoot.val === root.val && isEqual(root.left, subRoot.left) && isEqual(root.right, subRoot.right)  
}
