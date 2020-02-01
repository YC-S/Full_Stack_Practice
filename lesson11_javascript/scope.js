let obj = {
  name: 'Joe',
  age: 10
};

console.log(obj.name);
console.log(obj['name']);

function f(a, b, c) {
  console.log(1);
}

console.log(f.name);
console.log(f.length);
console.log(f);