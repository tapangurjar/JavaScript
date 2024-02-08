let mydate=new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
//out gives with the time 
// console.log(mydate.toLocaleDateString());
//output without time

// console.log(typeof mydate);
//date is a oblect in js

let mycreatedate=new Date(2024,1,8)
// console.log(mycreatedate.toDateString());
let mydate2 =new Date (2023,0,23,5,3)
//using to print the date with time according to user requirement
// console.log(mydate2.toLocaleString());

let mycreatedDATE=new Date("01-14-2024")
//using to modify the format of data according to requirement mm/dd/yyyy
// console.log(mycreatedDATE.toLocaleString());

let mytimestamp=Date.now()
// console.log(mytimestamp);
// console.log( mycreatedate.getTime());
console.log(Math.floor(Date.now()/1000));

