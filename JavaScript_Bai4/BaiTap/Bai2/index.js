
/**
 * 
 * @param {Array} a1 
 * @param {Array} a2 
 * @returns {boolean}
 */

function canNest(a1, a2) {
    let eMinA1 = a1.sort((a, b) => a - b)[0];
    let eMaxA1 = a1.sort((a, b) => b - a)[0];
    let eMaxA2 = a2.sort((a, b) => b - a)[0];
    let eMinA2 = a2.sort((a, b) => a - b)[0];

    return (eMinA1 > eMinA2 && eMaxA1 < eMaxA2);
}

console.log("Inp 1 : [1, 2, 3, 4], [0, 10]");
console.log("Inp 2 : [3, 1], [6, 0]");
console.log("Inp 3 : [1, 2, 3], [2, 3]");
console.log();
console.log(canNest([1, 2, 3, 4], [0, 10]));
console.log(canNest([3, 1], [6, 0]));
console.log(canNest([1, 2, 3], [2, 3]));