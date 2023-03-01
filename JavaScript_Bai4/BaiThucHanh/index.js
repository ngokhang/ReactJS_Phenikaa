// let a = 1;
// console.log(a++ + ++a + a++);

console.log(">> String : ");

let fullName = "heheheheheHE";
console.log(fullName.indexOf('okoko'));
console.log(fullName.length);
console.log(fullName.slice(0, 2));
console.log(fullName.replace('HE', 'HA'));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

console.log(">> Number : ");

let number = 12.365;
console.log(number.toFixed(1));
console.log(number.toString());
console.log(parseInt("123"));
console.log(parseFloat("3.1456"));

console.log(">> Array : ");

let array = [1, 2, 3];
// array.push(4);
// console.log(array);
// array.pop();
// console.log(array);
// console.log(array.shift()); // xoa phan tu dau tien, return gia tri da xoa
array.unshift(20);
console.log(array);
console.log(array.unshift(20));

console.log(">>>If...else....");

function testNumber(a) {
    let result;
    if (a > 0) {
        result = 'so duong';
    } else {
        result = 'so am';
    }
    return result;
}

console.log(testNumber(10));


console.log(">>>Switch case");
let a = "123";

switch (a) {
    case "123":
        console.log('Hello, World');
        break;

    default:
        console.log('hhehehehehehe');
        break;
}

