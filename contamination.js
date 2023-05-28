const contamination = (t, c) =>
  t
    .split("")
    .map((t) => t.replace(t, c))
    .join("");

// or (best practice)

const contamination1 = (t, c) => c.repeat(t.length);

//or

const contamination2 = (t, c) => t.split("").fill(c).join("");

console.log(contamination("qwer", "z"));
console.log(contamination1("qwer", "z"));
console.log(contamination2("qwer", "z"));
