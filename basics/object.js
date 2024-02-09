// there two way reprsent to the object

// 1. singleton
// -> object.create



// 2. object literal
const mysym=Symbol("key1")
// to use symbol inside the object pelase write in sqaure brakets

const Jsuser={
    name:"tapan",
    "full name":"tapan patel",
    // to get value of full name please sqaure notasion
    [mysym]:"mykey1",
    // now the type of mysym is symbol
    age:20,
    location:"bhopal",
    email:"tapanpatel@google.com",
    isloggedin:false,
    lastloggin:["monday","friday"]

}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// "email"->behind the it consider as string thats by it cover in double coat
// this the good way

// console.log(Jsuser["full name"]);

// console.log(Jsuser[mysym]);
// console.log(typeof(Jsuser[mysym]));

Jsuser.email="tapangurjar400404@gmail.com"
// to overwrite the value of email 

Object.freeze(Jsuser)
// use to lock the object now if you again change the value of email then it can not change

console.log(Jsuser);