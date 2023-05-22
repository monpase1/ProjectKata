"use strict";

let countSheep = function (num) {
  return Array(num)
    .fill(0)
    .map((value, index) => `${index + 1} sheep...`)
    .join("");
};

const n = 10;

console.log(...Array(n).keys());
console.log(countSheep(0));
