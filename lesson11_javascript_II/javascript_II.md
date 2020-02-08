## Goal

* Hoisting
* Scope
* Closure

### Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

```javascript
test(); // ?
function test() {
    console.log("test1");
}


console.log(c);  // c = ?
var c = 10; 

// 结论：
// 1. 函数声明整体提升了 - 可以调用函数
// 2. 变量声明提升了， 但是赋值没有提升
```

#### EC

扫描 pamarater 扫描函数声明 扫描变量声明

```javascript
console.log(a1); // ? und
console.log(b1); // ? und
console.log(f1); // ? fn body

var a1 = 19;
var a2 = 20;
var a3 = 'hello';
var b1 = {
   name: 'Joe Doe'
};

var res = f1(a1, a2);
console.log(res); // ? 39

function f1(a, b){
   var t = 0;
   var m = 10;

   console.log(a); // ? 19
   console.log(b); // ? 20

   function f2(){
       console.log('this is f2');
   }

   f2(); // ? 'this is f2'
   return a + b;
}
```

### Scope

The definition of scope described on the MDN website: https://developer.mozilla.org/en-US/docs/Glossary/Scope 

The current context of execution. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

```javascript
var a = 9;  
console.log('a' in window); 
function f1() { 
   		var t2 = 20; 
   		console.log( 'a - ',  a); 

   		function f2() {
       			var t3 = 30; 
       			console.log('t2 - ', t2 * t2); 
   		}
  		console.log('t3 - ', t3); // ?
   		f2();
}
f1();
console.log(t2); // ?
```

### Closure

The definition on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

```javascript
// ============ 1. what is closure ==============
// An inner function always has access to the vars and parameters of its outer function,
// even after the outer function has returned

function add() {
   // 局部变量 arg
   var n = 2;

   var sol = function () {
       console.log(n);
   };
   // 把另一个函数作为返回值
   return sol;

   /*return function(){
       console.log(n);
   }*/
}
```

Practice

```javascript
function practice1() {
   var arr = [];

   for(var i= 0; i < 4; i++) {
       arr[i] = function (){
           console.log(i);
       };
   }
   return arr;
}

var sol = practice1();  

for(var j = 0; j < sol.length; j++) {
   sol[j]();
} 
```

How to fix it?

```javascript
function practice2() {
   var arr = [];

   for(var i = 0; i < 4; i++) {
       (function (j) {
           arr[j] = function () {
               console.log(j);
           }
       })(i);
   }

   return arr;
}

var sol = practice2();

for(var j = 0; j < sol.length; j++) {
   sol[j]();
}
```

## 拓展阅读

http://bonsaiden.github.io/JavaScript-Garden/