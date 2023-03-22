let a = -1;
let b = 2;

const pro = (e) => {
  return new Promise((resolve, reject) => {
    if (e > 1) {
      resolve('Thanh cong roi nhes');
    } else {
      reject(new Error('That bai'));
    }
  });
};

pro(a)
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

pro(b)
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error('done!'));
//     }, 1000);
//   }).finally(() => {
//     console.log('Heheheheheheheh');
//   });

//   let result = await promise;
//   alert(result);
// }
// f();
