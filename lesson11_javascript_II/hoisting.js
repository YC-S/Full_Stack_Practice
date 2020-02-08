//Hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of
// their scope before code execution.
test();

function test() {
  console.log(1);
}

// console.log(c);

let c;
c = 10;
console.log(c);

function f1() {
  console.log('f1');
  f2();
}

function f2() {
  console.log('f2');
  f3();
}

function f3() {
  console.log('f3');
  f4();
}

function f4() {
  console.log('f4');
}

f1();
