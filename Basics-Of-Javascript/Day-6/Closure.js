// Function in return function will also have there lexical environment variables

// Example 1
function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("Kuldeep", "Yeware");
ans();
// Kuldeep Yeware

// Example 2
function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }
}

const ans1 = hello("Welcome");
ans1();
// varA varB Welcome


// Example 3
function myfunction(power){
    return function(number){
        return number ** power;
    }
}

const square = myfunction(2);
const ans2 = square(3);
console.log(ans2);
// 9


// Example 4
myfunction1 = () => {
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Successfully function is called");
            counter ++;
        }
        else{
            console.log("Already called");
        }
    }
}

const ans3 = myfunction1();
ans3();
// Successfully function is called
ans3();
// Already called