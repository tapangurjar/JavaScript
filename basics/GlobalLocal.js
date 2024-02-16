let a=1000

if (true){
    let a=10
    // console.log(`inner a = ${a}`)
    const b=20
    var c=30
    // var ke varible scope k bahar bhi print ho sakte hai
}
// console.log(a);
// console.log(b);
// console.log(`outer a = ${a}`);


function one(){
    const username="tapan"
    
    function two(){
        const website="youtube"
        // console.log(username);
    }
    // console.log(website);
    // through an error because out of the scope
    two()

}
one()

if (true){
    const username="tapan"
    if (username==="tapan"){
        const website="youtube"
        // console.log(username  +  website);
    }
    // console.log(website);
    // it will produce an error because out of the scope
}
// console.log(username);
// it will produce an error because out of the scope


console.log(addone(5));
function addone(num){
    return num+1
}


// console.log(addtwo(6))
// it can not call before function intilization
const addtwo=function(num){
    return num+2
}
console.log(addtwo(6))
