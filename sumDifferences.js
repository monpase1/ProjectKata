function sumOfDifferences(arr) {
    let sum = 0;
    console.log(Math.max(arr), Math.min(arr));
    console.log(Math.max(...arr), Math.min(...arr));
    arr.sort((a, b) => a - b).reverse();
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i] - arr[i + 1]
    }
    return sum;
}

const sod = (arr) => arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

console.log(sumOfDifferences([1, 2, 10]));