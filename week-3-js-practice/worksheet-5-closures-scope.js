const privatCounter = ()=>{
    let count = 0;
    return{
        increment(){
            count++
        },
        getcount(){
            return count;
        }
    };
};
const counter = privatCounter()
counter.increment();
counter.increment()
console.log(counter.getcount())
//
const createCounter =(start)=>{
    let count = start;
       return function(){
              count++;
                return count;

}

    }

const cou = createCounter(3);
console.log(cou())
console.log(cou())
console.log(cou())
//
const powerOf = (base)=>{
    return function(exponent){
      return base ** exponent
    };

};
const power = powerOf(2)
console.log(power(3))
//
const createFibonacci = ()=>{
    let a = 0 ;
    let b = 1;
    return function(){
        let current = a ; //0  0
        let next = a + b;//1
        a = b ;//1
        b = next;//1
        return current  //0
    };
}

const fib = createFibonacci();
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
//
    let arry = [];
for(let i = 0 ;i < 5 ; i++){
    arry.push(i);
}
    console.log(arry)
//
const functions = [];
for (let i = 0; i < 5; i++) {
  functions.push(() => {
    console.log('Current value of i is:', i);
  });
}

functions.forEach((func) => func());
//
function outer1() {
  var x = 10;

  var inner1 = function () {
    console.log(x);
  };

  inner1();
}

outer1();
//The function inner1 prints the value of x because 
// it does not have a local variable named x. So JavaScript looks for x 
// in the outer function outer1 and finds it there. This is an example of a closure,
//  where an inner
//  function can access variables from its outer function even after it is defined.

//
function outer2() {
  var x = 10;

  var inner2 = function () {
    var x = 20;
    console.log(x);
  };

  inner2();
}
outer2();
//In this example, the variable x is declared inside the inner2 function. 
// This local variable
//  shadows the outer x, so JavaScript uses the closest variable
// in scope. Therefore, it prints 20 instead of 10.
//
// (1) What is a closure?
//  A closure is when a function remembers variables from its outer scope even
//  after the outer function has finished executing.
// (2) Why can closures “remember” values?
// Closures can remember values because inner functions keep access to variables from their outer scope 
// even after the outer function finishes execution.
// (3) Why does var behave differently from let inside loops?
//  var shares the same function scope in all loop 
//  iterations, while let creates a new block scope for each iteration.
// (4) Why did the array reset in Challenge 6?
// The array reset because a new array was 
// created inside the loop during each iteration.
// (5) Which challenge was hardest and why?
//  The hardest challenge was the closure loop bug because it required understanding how scope 
//   and closures work together inside loops.


