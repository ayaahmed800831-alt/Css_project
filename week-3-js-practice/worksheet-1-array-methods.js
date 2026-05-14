//(a)
 const numbers = [1,2,3,4];
let lama = {};
numbers.forEach(num => {
    lama[num] = num*2;
});
console.log(lama)
//
//(b)

const number= [34,56,12,88,10];
let sum = 0;
number.forEach(num =>{
    sum += num;
});
console.log(sum);
//
const names = ['Ahmad', 'Nour' ,'Amira' , 'Omar'];
 let ll = names.map((names)  =>{
return {name: names.toUpperCase()};
});
console.log(ll);
//
const countries = [
    { country: 'Plastine', language : 'Arabic'},
    { country: 'Spain'   ,language : 'Spanish'},
    { country: 'Germany' , language : 'German'},
    { country: 'USA'     , language : 'English'}];
 const pp = countries.filter(item =>{
    return item.language === 'Arabic'|| item.language ==='English';
    
});
console.log(pp);
//
const dogs= [
    { name:'crackers', breed:'bulldog'},
    { name:'trixie' , breed:'poodle'}
];
const dogsObject = dogs.reduce((acc,dog)=>{
    acc[dog.name] = dog.breed;
    return acc;
},
{});
console.log(dogsObject);
//
const people = {
    amelie : 'drawing',
    jackson : 'cooking'
};
const peopleArray = Object.keys(people).map(name => {
    return{
    name:name,
    hobby:people[name]
    };
});
console.log(peopleArray);
//
const arr1 = [1,2,3];
const arr2 = ['a' ,'b','c'];
let mergedArrays = [...arr1,arr2];
console.log(mergedArrays);
//
const fruits = ['Apple','Orange'];
const newFruits = [...fruits,"Banana"]
console.log(newFruits);
//
const obj1 ={name:'Ahmad'};
const obj2 ={age:25};
const obj = {...obj1 ,...obj2};
console.log(obj);
//Reflections
//(Answer to the first question) :: you use map when you want to
// create and return a new array with modified values,while
//forEach is mainly used for executing actions on each element
//without  returning a new array.
//(Answer to the second question) :: Because reduce is more complex
//than other methods since it transforms an entire arry into a single
//accumulated value.it also requires defining an initial value and
//carefully controlling how each element is combined,which makes its 
//logic more detailed and harder to follow compared to methods like map or forEach.
//(Answer to the three question) ::The spread operator(...) solves the problem
// of easily copying and combining arrays or objects without modifying
// the original data.it allows us to merge multiple arrays or objects
// into one in a clean and simple way while keeping the original values
// unchanged
//(Answer to the four question) : The reduce challenge was hardest
// because it needs more thinking than other methods
