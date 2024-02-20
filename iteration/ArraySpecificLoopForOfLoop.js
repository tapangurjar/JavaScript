// for of loop

["","",""]//string inside array
[{},{},{},{}]//object inside array

const arr=[1,2,3,4,5]
//object,array,string all are iterator and we can apply loop on it.
//for array
for (const num of arr) {
    // console.log(num);
}

//for of loop for strings
const greetings ="hello world!"
for (const greet of greetings) {
    // console.log(`each character is ${greet}`);
}


//maps in js
//no repeated value in map 
// ordered value as you writtern  
const map=new Map()
map.set('IN',"india")
map.set('USA',"usaaaa")
map.set('FR',"france")
map.set('IN',"india")
// console.log(map);
//for destructure the array we use [key and valuye ]in for of loop
for (const [m,v] of map) {
    // console.log(m,":-",v);
}


// object are not iterable by the for of loop
const myobject={
    "game": "NFS",
    "game2": "Spiderman"
}
for (const [key,value] of myobject) {
    // console.log((key,":",value));
}
  