(function () {
  // object literal 文字
  let person = {
    name: 'John Doe',
    age: 20,
    greeting: function (greet) {
      console.log(greet + ' I am ' + this.name +
        ' and I am ' + this.age + ' years old.');
    },
    speak: function (a, b) {
      console.log('I am ' + this.name + ', ' + a + ' ' + b);
    }
  };

  person.greeting('Hi');

  // new operator
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greeting = function (greet) {
      console.log(greet + ' I am ' + this.name + ' and I am ' + this.age + ' years old.');
    };

    this.speak = function (a, b) {
      console.log('I am ' + this.name + ', ' + a + ' ' + b);
    };
  }

  let bob = new Person('Bob', '18');
  let alice = new Person('Alice', '17');
  bob.greeting('Hello');
  alice.greeting('Hi there');

  // context
  let grt = bob.greeting;
  grt('Hi');

  // call apply bind
  grt.call(bob, 'Hi');
  grt.call(alice, 'Hi there');

  let spk = bob.speak;
  spk.apply(bob, ['Good', 'morning']);
  spk.apply(alice, ['Nice', 'day']);

  grt = bob.greeting.bind(bob);
  grt('Bind haha');
})();