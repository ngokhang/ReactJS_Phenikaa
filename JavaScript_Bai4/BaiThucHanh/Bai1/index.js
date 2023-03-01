let a = 'one';
let b = 'two';


console.log(">> a v1 : ", a);
console.log(">> b v1 : ", b);

let temp = a;
a = b;
b = temp;

console.log(">> a v2 : ", a);
console.log(">> b v2 : ", b);