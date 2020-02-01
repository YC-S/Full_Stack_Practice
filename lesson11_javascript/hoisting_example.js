// console.log(a1);
// console.log(a2);
console.log(f1);

let a1 = 19;
let a2 = 20;
let a3 = 'hello';
let b1 = {
  name: 'Joe Doe'
};

let res = f1(a1, a2);
console.log(res);

function f1(a, b) {
  console.log(a);
  console.log(b);

  function f2() {
    console.log('this is f2');
  }

  f2();
  return a + b;
}