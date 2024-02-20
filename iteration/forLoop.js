//for loop
for (let index = 1; index < 10; index++) {
    const element = index;
    // console.log(element);
}

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value : ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i}x${j}=${i*j}`);
//     }   
// }


// let myarray=["flash","batman","ironman"]
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
// }


// break and continue

// for (let index = 0; index < 10; index++) {
//     if (index==5){
//         console.log("detected 5");
//         break
//     } 
//     console.log(`value of index is ${index}`);
    
// }
for (let index = 0; index < 10; index++) {
    if (index==5){
        console.log("detected 5");
       continue
    } 
    console.log(`value of index is ${index}`);
    
}



