let a = 1;
let b = 2;

function findMax(n1, n2) {
    if (n1 < n2) return n2;
    return n1;
}

console.log(">> Input : ", a, b);
console.log(findMax(a, b));