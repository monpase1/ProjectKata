const arrayPlusArray = (arr1, arr2) =>
  arr1.concat(arr2).reduce((a, b) => a + b);

// or (new functions)

const arrayPlusArray2 = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((a, b) => a + b);
