const score=100
//it define automatically  its a number
// console.log(score);

const score1=new Number(400)
//scpecifically define this is number type
// console.log(score1);

// console.log(score1.toString().length);
// console.log(score1.toFixed(1));
//to fixed after the number there is minimumt two value will we there

const hunderds=1000000
// console.log(hunderds.toLocaleString("en-IN"));


 ///////////========== Maths ==========////////

//  console.log(Math.abs(-4));
// console.log(Math.round(40.89)); //to use round off
// console.log(Math.ceil(40.1));   //to use upper,max value 
// console.log(Math.floor(4.99999));//to use min,and least value

// console.log(Math.min(2,3,4,5,4));// to get the min value from array
// console.log(Math.max(2,3,4,50,4));// to get the max value  from array

console.log(Math.random());//to chose the random value
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);//to use round of value

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);