const findMissingNumber = function (arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
  return n;
};

console.log(findMissingNumber([3, 0, 1], 3)); // Output = 2
