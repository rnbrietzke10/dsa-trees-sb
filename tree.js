/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let sum = this.root.val;
    // got through children nodes
    const helper = (node) => {
      for (let child of node.children) {
        // add value to sum
        sum += child.val;
        // check if child has children
        if (child.children.length) {
          // call function helper recursively
          helper(child);
        }
      }
    };
    helper(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = 0;
    if (this.root.val % 2 === 0) {
      count++;
    }

    const helper = (node) => {
      // loop through children
      for (let child of node.children) {
        // check if value is even
        if (child.val % 2 === 0) count++;
        // check if child has children
        if (child.children.length) helper(child);
      }
    };
    helper(this.root);

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = 0;
    if (this.root.val > lowerBound) {
      count++;
    }

    const helper = (node) => {
      // loop through children
      for (let child of node.children) {
        // check if value is even
        if (child.val > lowerBound) count++;
        // check if child has children
        if (child.children.length) helper(child);
      }
    };
    helper(this.root);

    return count;
  }
}

module.exports = { Tree, TreeNode };
