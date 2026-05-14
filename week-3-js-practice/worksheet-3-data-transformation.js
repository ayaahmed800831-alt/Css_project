const strings = ['Hello', 'This','Is' ,'JavaScript']
const lana = `'${strings.join(` `)}'`;
console.log(lana)
//
const words = ['I' ,'Love' ,'Js'];
const result = words.map(w => w.toLowerCase()).join(' ');
console.log(result);
//
const dictionaryject = {
    cat : 'قطة',
    dog : 'كلب'
};
const lama = Object.keys(dictionaryject).map(key =>{
return{
    english : key,
    arabic : dictionaryject[key]
};
});
console.log(lama)
//
const obj = {
    a : 1,
    b : 2
};
const lam  = Object.keys(obj).map(key => {
return{
key   :  key ,
value : obj[key]
};
});
console.log(lam);
//
const user = {
    name : 'Ahmad',
    age : 25
};
const oo = Object.entries(user).map(([key,value])=>{
    return `${key} : ${value}`;
});
console.log(oo);
//
const weather = [
    {city:'Bethlehem', temperature:25 , day :'tuesday'},
    {city:'Nablus', temperature:28 , day :'friday'},
    {city:'Hebron', temperature:31 , day :'tuesday'}];
const pp = weather.filter(items =>{
    return items.day === 'tuesday'&& items.temperature > 25;
    });
    console.log(pp)
    //
    const products = [
        {name : 'Phone' ,price :500},
        {name : 'Cable' ,price :20}
    ];
    const ee = products.filter(a=>a.price > 100);
    console.log(ee);
    //
    const users = [
        {name : 'Ahmad'},
        {name : 'Line'},
        {name : 'Ali'},
    ];
    const re = users.filter(items => items.name[0] ==='A');
    console.log(re);
    //
    const dogs = {
        crackres : 'bulldog',
        rex : 'german sheperd'
    };

    const cats = {
        sunshine : 'tobby',
        vanilla  : 'siamese'
    };
    const uu = [...Object.keys(dogs),...Object.keys(cats)]
     console.log(uu);
     //
     const objj = {
        name : 'Ahmad',
        age  :  25
     };
     const yy = Object.keys(objj).map(aa=>aa.toUpperCase());
     console.log(yy)
     //
     const obb = {
        a:'hi',
        b:'hello',
        c:'world'
     };
     const rr = Object.keys(obb).filter(mm=> obb[mm].length > 3);
     console.log(rr);
     //a
     const obj1 = {name :'Ahmad'};
     const obj2 = {age :25 };
     const ww = {...obj1 ,...obj2};
    console.log(ww)
    //b
    const  obj3   = {name :'Ahmad',age:20};
    const  obj4    = {age :  25 };
    const  obj5     = {...obj3 , ...obj4}
      console.log(obj5)
   //c
      const userr = {name:'Ahmad'};
      const details ={age : 25   }
      const dd = {...userr,...details,isAdmin:true}
      console.log(dd)
      //
      // (1) When would you use reduce instead of map?
      // We use reduce when we need to transform an array into a 
      // single value like an object, number, or string.
      // (2)  Which transformation was hardest?
      // The hardest transformation was converting between objects and arrays because it requires combining 
      // multiple methods like Object.entries and reduce.
      // (3)  How do you decide which method to use?
      //     I decide based on the goal: use map for transforming, filter for selecting, and reduce
      //     for combining data into one result.
      // (4) What pattern do you notice across these problems?
      //  The pattern is that data is continuously transformed from one structure to another 
      //  using functional array methods without loops.