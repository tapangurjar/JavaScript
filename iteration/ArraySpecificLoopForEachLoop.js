// for each loop
//for each never return anything 

const coding=["js","ruby","java","py","cpp"]
//in foreach loop we cannot use the name of function in beacuse it is a callback function
//we can use the arrow function and simple function
coding.forEach(function(val){
    // console.log(val);
})
coding.forEach((val)=>{
    // console.log(val);
})

//also we can call the value of array through this way
function printme(item){
    // console.log(item);
}
coding.forEach(printme)

const mycoding=
[
    {
        languageName:"javascript",
        fileextension:"js"
    },
    {
        languageName:"python",
        fileextension:"py"
    },
    {
        languageName:"java",
        fileextension:"java"
    },
    {
        languageName:"html",
        fileextension:"html"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.fileextension);
})
