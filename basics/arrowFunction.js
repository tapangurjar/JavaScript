const user={
    username:"tapan",
    price:999,

    welcomeMessage: function(){
        console.log((`${this.username} ,welcome to website`));
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);
// }
// chai()


// const chai=function(){
//     let username="tapan"
//     console.log(this);
// }
// chai()

// const chai=()=>{
//     let username="hitesh"
//     console.log(this);
// }
// chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(3,4));

// const addtwo=(num1,num2)=> num1+num2
// console.log(addtwo(3,40));

// const addtwo=(num1,num2)=> (num1+num2)
// console.log(addtwo(3,40));

const addtwo=(num1,num2)=> ({username: "tapan"})
console.log(addtwo(3,40));