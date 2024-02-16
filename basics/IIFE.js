//Immediaely Invoked Function Expression (IIFE)
 (function chai(){
    // named IIFE
    console.log(`DB connected`);
 })();
//  ()->function defination in first  pranthesis
//()-> execution call
// IIFE=jo function immidiate call ho gaye global scope ke pollution se  problem hoti hai kai baar to us global scope ke variable ke pollution ko hatane k liye humne IIFE ka use kiya

///two IIFE function ko execute krne liye hume fisrt function ko end krne liye humne explicitly ek semicolon lagaya hai

(()=>{
    // unamed and unparameterized IIFE
    console.log(`DB connected two`);
})();

((name)=>{
    // unamed and parameterized IIFE
    console.log(`DB connected two ${name}`);
})("tapan")

