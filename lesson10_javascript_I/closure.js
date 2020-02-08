// A closure is a function defined within another scope that has access to all the
// variables within the outer scope.

// Closure = Function + Closure Scope Object (also called Lexical Environment)

// function f() {
//   let a = 5;
// }
// f();
// console.log(a);  // not defined

function example1() {
  let a = 5;

  function inner() {
    console.log(a);
  }

  inner();
}

example1();

function example11() {
  let a = 5;

  function inner() {
    console.log(a++);
  }

  function inner1() {
    console.log(a++);
  }

  inner();
  inner1();
}

example11();

function generate(num) {
  let message = "num is: ";
  let func = function () {
    console.log(message + num);
  };
  return func;
}

function example2() {
  let fArr = [];
  for (let i = 0; i < 5; i++) {
    let f = generate(i);
    fArr.push(f);
  }
  for (i = 0; i < 5; i++) {
    fArr[i]();
  }
}

example2();

function ex1() {
  // JS Runtime found f is using ex1's local variables
  // A scope object scope_ex1 = { i: _ } is created
  for (let i = 0; i < 10; i++) {
    // Define a new function f EVERY ITERATION which references scope_ex1
    let f = function () {
      console.log(i);
    };
    // Tell JS Runtime to call f after 1 second, this operation is non-blocking
    setTimeout(f, 1000);
  }
}

console.log('before ex1');
ex1();
console.log('after ex1');

function createFunc(val) {
  return function () {
    console.log(val);
  };
}

function ex2() {
  for (let i = 0; i < 10; i++) {
    let f = createFunc(i);  // f is a new function with closure scope { val: i }
    setTimeout(f, 1000);
  }
}

ex2();