//filter
//filter is used to filter the element 
// const mynum=[1,2,3,4,5,6,7,8,9,10]
// const newnum=mynum.filter((item)=> {
//     //when ever we use the curlibraces {} then always we have to return
//     return item>4 
// }) 
// console.log(newnum);

// const newnum=mynum.filter((item)=> item > 4) 
//this single line function here we dont the scope then we dont use the return keyword
// console.log(newnum);


//through for each loop
// const newnum2=[]
// // mynum.forEach((num)=>{
//     if (num>4){
//         newnum2.push(num)
//         // console.log(num);
//     }
// })
// console.log(newnum2);




// ---------------------------------------------

//map
//map will always return a value
// const mynumber=[1,2,3,4,5,6,7,8,9,10]
// const newnums=mynumber.map((num)=>{return num+10})
// // console.log(newnums);


// //through for each loop
// const newnum3=mynumber.forEach((item)=>{ 
//  console.log(item+10);})

//  //chaning in map
//  const newnum4=mynum
//                     .map((item)=>item*10)
//                     .map((item)=>item+1)
//                     .filter((item)=>item>40)

// console.log(newnum4);




//--------------------------------------------
//reduce
const mynums=[1,2,3,4,5]
//trough basic function
const mytotal=mynums.reduce(function(acc,curr){
    console.log(`acc  ${acc} and curr${curr}`);
    return acc+curr
},0)
console.log(mytotal);


const shopingcart = [
    {
    item:"js course",
    price:2999
},
    {
    item:"python course",
    price:3999
},
    {
    item:"java course",
    price:21999
},
]
const pricetopay=shopingcart.reduce((acc,item)=>acc +item.price,0)
console.log(pricetopay);