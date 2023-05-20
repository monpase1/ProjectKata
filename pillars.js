function pillars(numPill, dist, width) {
    return numPill > 1 ? dist * 100 * (numPill - 1) + width * (numPill - 2): 0;
}

console.log(pillars(11, 15, 30));