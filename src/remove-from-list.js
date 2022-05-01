const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  let current = l;
  let position = 0;
  while (current) {
    if (current.value === k) {
      if (position === 0) {
        l = current.next;
        current = l;
      } else {
        prev.next = current.next;
        current = prev.next;
      }
    } else {
      prev = current;
      current = current.next;
    }
    position++;
  }
  return l;
}

module.exports = {
  removeKFromList,
};
