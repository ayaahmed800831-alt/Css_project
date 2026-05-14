const sayHello = ()=>{
    console.log("hello")
};
const repeatFunction = (func)=>{
    return (times)=>{
        for(let i = 0 ; i<times ; i++){
            func();
        }
    }
}
const repeatHello = repeatFunction(sayHello)
repeatHello(3);
//
const add = (a,b)=>{
    return a + b 
};
const withLogging = (func)=>{
    return (...args)=>{
        console.log("Function start")
    const result = func(...args);
    console.log("Function finish")
    return result;
    }

}

const logg = withLogging(add)
console.log(logg(5,10))


//
const exampleNormalFunc1 = (a, b, c) => {
  return a * (b + c);
};

const exampleNormalFunc2 = (x, y) => {
  return x * y;
};

const exampleNormalFunc3 = (string) => {
  return string + ' ' + string + ' ' + string + '!';
};

const arrowHOF = (normalFunc) => {
    return (...args)=>{
     return (times)=>{
        for(let i=0 ; i<times ; i++){
            console.log(normalFunc(...args));
        }
     }
};
}
const hofNormalFunc1 = arrowHOF(exampleNormalFunc1);
const hofNormalFunc2 = arrowHOF(exampleNormalFunc2);
const hofNormalFunc3 = arrowHOF(exampleNormalFunc3);

hofNormalFunc1(3, 4, 5)(2);
hofNormalFunc2(20, 35)(4);
hofNormalFunc3('Meow')(1);
///
const preserveThis = (func) => {
  return function (...args) {
    return func.call(this, ...args);
  };
};

const user = {
  name: "John",
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}!`);
  },
};

user.preservedGreet = preserveThis(user.greet);
user.preservedGreet("Hello");
//
const use = {
  name: 'Lina',
  greet: function () {
    console.log(this.name);
  },
};

const greetFunction = use.greet;
greetFunction();
//The function loses its context when it is separated from the object. 
// Therefore, this no longer refers to the user object. Instead, it becomes undefined (or the global object in non-strict mode),
//  so this.name cannot be accessed and the result is undefined.
//
function outer1(){
  var x = 10;
  var inner1 = function(){
    console.log(x)
  };
  inner1();
}
outer1()
//The inner function prints the value 
// of x from the outer scope because it is not redeclared 
// inside the inner function,therefore it prints 10


function outer2() {
  var x = 10;

  var inner2 = function () {
    var x = 20;
    console.log(x);
  };

  inner2();
}

outer2();
//The inner function declares its own variable x, 
//which shadows the outer one,therefore it prints 20.

//
 // (1) What is a higher order function?
//     A higher order function is a function that either takes another 
//     function as an argument or returns a function.
// (2) Why would we pass a function into another function?
//   We pass a function into another function to make the code more flexible and reusable, allow different behaviors, 
//   and control when the function is executed.
// (3) Why would a function return another function?
//   A function returns another function to create reusable and customizable behavior,
//    and to enable function composition and closures.
// (4) What does this usually refer to?
// this usually refers to the object that is calling the function 
// at the time of execution.
// (5) Why can this become confusing in JavaScript?
// this can be confusing because its value depends on how the function is called, 
// not where it is defined, so it can change in different situations.