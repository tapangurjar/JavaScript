//array
const myarr=[0,1,2,3,4,5]
const myheros=["ironman","spiderman","saktimaan"]
const myarr2=new Array(1,2,3,4)
// console.log(myheros[1]);

//array method
// myarr.push(6)
// myarr.push(10)
// //using to push the element in the array
// console.log(myarr);

// myarr.pop()
//using to pop the element form the array
// console.log(myarr);

// myarr.unshift(9)
// //using to insert the element in the array by shift the other element in the array
// console.log(myarr);

// myarr.shift()
// //using to remove fisrt element from the array
// console.log(myarr);

// myarr.shift()
// console.log(myarr);

// console.log(myarr.includes(9));
//to check the element is present in the array or not

// console.log(myarr.indexOf(3));
//to check the index number of given array

//  const newarr=myarr.join()
 //join is use to convert the array in the string format with same data
//  console.log(myarr);
//  console.log(newarr);

//slice and splice
// console.log("a ",myarr);

const my1=myarr.slice(1,4)
//slice is use to return the element from givent index to (last-1)
// console.log(my1);
// console.log("b ",myarr);

const my2=myarr.splice(1,3)
//splice is used to remove and return the elemnt from given index till last index given in the parameter
// console.log(my2);
// console.log("c",myarr);

 





//////======= Part 2 Array =======//////

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);

// console.log(marvel_heros[3][1]);
//we get the element present in the index given 

// const allHeros = marvel_heros.concat(dc_heros)
//it will always return a single array with spread element
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
//it is a spread methos join all the element of multiple array in another new aray
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
//flat is used to check the indepth of array and join all element in a single array
// console.log(real_another_array);


// console.log(Array.isArray("Hitesh"))
//it is used to cheack the string is prestnt or not in the array

// console.log(Array.from("Hitesh"))
//it will break the string in the array

// console.log(Array.from({name: "hitesh"}))
// it will always return an empty array beacuse of key value pair

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3));
//it is used to merg the multiple varible in the array