 //for in loop
 const myobject={
    java:"java",
    python:"py",
    ruby:"ru",
    html:"html"
 }
 //to get iterate the object we need the for in loop

 for (const key in myobject){
    // console.log(`${key} shourtcutfor ${myobject[key]}`);
 }

 
//how to get the values of array with for in loop

//to get the value of array we write the name of object and the variable we use in the loop for iteration for-ex 
 
const programming=["js","rb","py","java"]
for (const key in programming){
    console.log(programming[key]);
}
