function treeSum(arr, n) {
  return arr.flat(n).reduce((a, b) => a + b);
}
console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8], 3));
