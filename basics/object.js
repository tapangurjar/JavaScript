// there two way reprsent to the object

// 1. singleton
// -> object.create
// const tinderuser=new object()  is it a singleton object
const tinderuser={} 
// it is a non-singleton object
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin=false

// console.log(tinderuser);

const reuglaruser={
    email:"tapangurajrkjo@34.com",
    fullname:{
        userfullname:{
            firstname:"tapan",
            lastname:"patel"
        }
    }
}
// console.log(reuglaruser.fullname.userfullname.firstname);
// to get the value object inside object 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign(obj1,obj2)
// object.assign is used to combine both objet a and b
// console.log(obj3);
const obj4={...obj1,...obj2}
// spread is using to combine to object this is the latest and easy way to combine the two object
// console.log(obj4);
//  console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// receive on keys it will use for work on the data base 
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// to get the pair of key and value in form of array and now it is easy to handel beacuse it is now an array
// console.log(tinderuser.hasOwnProperty('isloggedin'));
// to cheak the property is exist krti hai ya nahi







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

// console.log(Jsuser);





// destructure of object
const course={
    coursr:"js in hindi",
    price:"999",
    courseinstructor:"tapan"
}
const{courseinstructor : instructor}=course
// {courseinstructor : instructor}=humne courseinstructor ko restucture kr diya ab hum isse instructor se call kr sakte hai
// console.log(instructor);
