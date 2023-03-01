let a = [2, 3, 2, 5, 8, 4];

function findMaxInArray(array) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
        if (temp < array[i]) {
            temp = array[i];
        }
    }
    return temp;
}

console.log(`>> Input : ${a}`);
console.log(`>> Output : ${findMaxInArray(a)}`);