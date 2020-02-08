const length = 16;                            // number
let name = 'John';                            // string
name = 123;                                   // dynamic typing
let p = {firstName: 'John', lastName: 'Doe'}; // object
let isGood = true;
let isPlenty = true;
let isGoodAndPlenty = isGood && isPlenty;
let arr = [1, 2, 3];                          // array
let arr1 = [1, 2, 3, 'John', 'richard', 'bob'];  // array

// function
function say() {
  return 'I am a function';
}

// function
let say1 = function () {
  return 'I am a function';
};

let o = null;
console.log(typeof o);    // object
let u;
console.log(typeof u);    // undefined