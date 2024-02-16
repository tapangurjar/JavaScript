function saymyname(){
    console.log("tapan");
}
// to create function we use the function keyword and then name of fuction and paranthesis and last the scope of function
// saymyname()
// to call a function we write the name of function and then the execution paranthesis


// 1st way to print
// function addtwonumber(num1,num2){
//      console.log(num1+num2)
// }
// addtwonumber(2,4)


// 2nd way to print
function addtwonumber(num1,num2){
    let result=num1+num2
    return result
    console.log("tapan");
    // this log statement is never execute because once a funtion is return something then else code never we execute
}
const result=addtwonumber(3,4)
// console.log("result ",result);



function loginmessage(username){
    if(username === undefined){
        console.log("pelase enter a username");
    }
    return `${username} just logged in` //string intopulation (backticks)
}
// loginmessage("tapan")
// console.log(loginmessage("tapan"))
// console.log(loginmessage("tapan"));




function calculatorcarprice(...num1){
    //...num1 -> it is a rest operator and it will always return an array
    return num1
}
// console.log(calculatorcarprice(200,300,400,500,5006,6555));





const user={
    username:"tapan",
    price : 1999
}
function handleonject(anyobject){
    console.log(` the name is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleonject(user)
handleonject({
    // another way to  handle object
    username:"sam",
    price:399
})





const myarray=[200,400,500,100]
function returnsecondvalue(getarray){
    return getarray[1]
}
// console.log(returnsecondvalue(myarray));
console.log(returnsecondvalue([200,340,500,3434]));
