const power = (x, y) => x ** y;

const powerLite = (x, y) => {
  for (let i = 1; i < y; i++) {
    x *= x;
  }
  return x;
};

console.log(power(-1, 40));
