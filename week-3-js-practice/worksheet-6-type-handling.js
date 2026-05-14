const convertStringToNumber=(input)=>{
 if(typeof input === "string"){
   return +input;
}
return{
    value:input,
    type:typeof input,
};
};

console.log(convertStringToNumber('25'));
console.log(convertStringToNumber(10));
//
const checKNaN = (value)=>{
    return Number.isNaN(value);
    };
    
    
console.log(checKNaN(NaN));
console.log(checKNaN(10));
console.log(checKNaN('hello'));
//
const isEmptyValue =(value)=>{
  return value=== undefined || value===null || value=== ""
    }

console.log(isEmptyValue(undefined))
//
const compareObjects = (input1, input2) => {
  if (typeof input1 === "object" && typeof input2 === "object" && input1 !== null && input2 !== null) {
    return JSON.stringify(input1) === JSON.stringify(input2);
  } else {
    return [input1, input2];
  }
};

console.log(compareObjects({ a: 1 }, { a: 1 }));
console.log(compareObjects({ a: 1 }, { a: 2 }));
console.log(compareObjects(10, { a: 1 }));
//
const complexCoercion = (input) => {
  if (input === null || input === undefined) {
    return false;
  }

  if (typeof input === "object") {
    return input;
  }

  if (typeof input === "number") {
    return Boolean(String(input));
  }

  if (typeof input === "string") {
    return Boolean(input);
  }

};

console.log(complexCoercion(10));
console.log(complexCoercion("hello"));
console.log(complexCoercion(null));
console.log(complexCoercion({ name: "Ahmad" }));
//
console.log('5' + 2)
console.log('5' - 2)
console.log(true + false)
console.log(null + 1)
console.log(undefined + 1)
// "52"
//3
//1
//1
//NaN
//
// (1) What is the difference between == and ===?
//    == compares values after converting types,
//    while === compares both value and type without conversion.
// (2) Why is NaN special?
//  NaN is special because it means “Not a Number” and it is the only 
//  value in JavaScript that is not equal to itself.
// (3)  What is type coercion?
//  Type coercion is when 
// JavaScript automatically converts one data type into another.
// (4)  When can type coercion cause bugs?
//  Type coercion can cause bugs when JavaScript converts values unexpectedly, 
//   leading to incorrect results or comparisons.
// (5) which callenge felt the most confusing and why?
// The most confusing challenge was complex coercion
// because JavaScript automatically converts data types,
// which can sometimes lead to unexpected results.