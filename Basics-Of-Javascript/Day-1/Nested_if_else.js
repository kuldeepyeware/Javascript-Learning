let winningnumber = 19;
let userguess = Number(prompt("Enter the guess number"));

if(userguess === winningnumber){
    console.log("Your guess is right");
}
else{
    if(userguess > winningnumber){
        console.log("Guess is high");
    }
    else{
        console.log("Guess is low");
    }
}