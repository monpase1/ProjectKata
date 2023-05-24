const multiTable = (number) =>
  // in an array.from, you can use an object with an attribute ({ lenght: n }) or create a new array (Array(n)).
  Array.from(Array(10), (item, index) => index + 1)
    .map((n) => `${n} * ${number} = ${n * number}`)
    .join("\n");

console.log(multiTable(5));
