const reverseSeq = (n) => [...Array(n)].map((_, index) => index + 1).reverse();

// or

const reverseSeq2 = (n) => [...Array(n)].map((_, index) => n - index);
