//arrow function 
//challenge1
const multiplyByFive = num => num*5;
const divideByTwo = num => num/2;
const square = num => num*num;
//challenge2
const addThreeNums = (num1,num2,num3)=>
     num1 + num2 + num3;
const multiply = (a,b)=>
     a*b;
const fullName = (first , last)=>
     first + '' + last;
//challenge3
const upperCaseFun = (str)=>{
    console.log(str);
    return str.upperCaseFun
}
const isEven = (num)=>{
    if(num % 2===0) {
        return true;
    }
    return false;
};
const getLength = (arr)=>arr.length;
//challenge4
function toLowerAnimals (arr){
    return arr.map(item =>
         item.toLowerCase());
    };
    const numbers = [1,2,3,4];
    const doubled = numbers.map(num =>num*2);
    const users = [
          {name:'Ahmad'} ,
          {name:'Line'}];
const names = users.map(users=>user.name);
//challenge5
const numbers = [10,25,30,5];
const filtered = numbers.filter(num => num > 20);
//
const numbers =[1,2,3,4];
const total = numbers.reduce((acc , curr) => acc + curr , 0 );
//
const words = [ 'a', 'bb' , 'ccc']
const longWords = words.filter((word)=>words.length > 1);
//challenge6
const url = 'http://dummyjson.com/products';
const fetchData = ()=>{
    fetch(url).then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=> console.log(error));
}
//
const getUsers = ()=>{
return
 fetch('https://dummyjson.com/users')
.then(res=> res.json());
};
//
fetch('http://dummyjson.com/posts')
.then(res=>res.json())
.then(posts=> console.log(posts.length));
//
// (1) When can you remove {} in an arrow function?
// You can remove {} when the arrow function has a single 
// expression and uses implicit return.
// (2) When do you need return?
// You need return when using curly braces {} in the 
// function or when you want to explicitly return a value.
// (3) What changes when a function has one parameter vs multiple?
// With one parameter, parentheses can be omitted in arrow functions.
//  With multiple parameters, parentheses are required.
// (4)  When should you NOT use arrow functions?
// You should not use arrow functions when you need the
//  this keyword to refer to the calling object.