let a = 9;

// console.log('a' in window);
function f1() {
  let t2 = 20;
  console.log('a - ', a);

  function f2() {
    let t3 = 30;
    console.log('t2 - ', t2 * t2);
  }

  // console.log('t3 - ', t3); // ?
  f2();
}

f1();
// console.log(t2);
