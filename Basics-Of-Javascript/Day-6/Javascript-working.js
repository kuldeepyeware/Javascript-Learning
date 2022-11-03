//Phase 1
//Compilation -> 1) Lexical analyzing 2) Parsing

// Phase 2
// Global execution context
// 1) Creation phase -> Global memory, Window 
// 2) Code execution phase
// 3) Function execution context


console.log(this);
// Window
console.log(window);
// Window
console.log(myFunction);
//  ƒ myFunction(){
//     console.log("Here is function");
// }
console.log(fullName);
// undefined

function myFunction(){
    console.log("Here is function");
}

var firstName = "Kuldeep";
var lastName = "Yeware";
var fullName = firstName + " " + lastName;
console.log(fullName);
// Kuldeep Yeware

console.log(gender);
// Uncaught ReferenceError: Cannot access 'gender' before initialization
let gender = "Male";
// Diffrence between var and let
