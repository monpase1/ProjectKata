function sameCase(a, b) {
    const x = a === a.toUpperCase() ? 1 : a === a.toLowerCase() ? 2 : 0,
        y = b === b.toUpperCase() ? 1 : b === b.toLowerCase() ? 2 : 0;
    if (a.match(/[a-z]/i) && b.match(/[a-z]/i)) {
        return x === y ? 1 : 0;
    } else {
        return -1;
    }
}
console.log(sameCase('a', 's'));