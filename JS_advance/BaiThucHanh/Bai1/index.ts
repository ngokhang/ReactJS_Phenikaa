const test = <T>(obj: T): T => ({...obj, create: "Khang"});

const person = test({number: 1});
console.log(person);