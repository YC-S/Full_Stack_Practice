// ============ 1. what is closure ==============
// An inner function always has access to the vars and parameters of its outer function,
// even after the outer function has returned
function add() {
  // 局部变量 arg
  let n = 2;

  // 把另一个函数作为返回值
  return function () {
    console.log(n);
  };

  /*return function(){
      console.log(n);
  }*/
}

let res = add();
console.log(add()());
console.log(res);
console.log(res());

function practice1(a) {
  let arr = [];

  for (let i = 0; i < 4; i++) {
    arr[i] = function () {
      console.log(i);
    };
  }
  return arr;
}

let sol = practice1();
console.log(sol);

for (let i = 0; i < sol.length; i++) {
  sol[i]();
}