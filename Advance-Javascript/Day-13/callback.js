// Callbacks in synchronous javascript

function getnumbersandadd(num1, num2, onSuccess, onFailure){
    if(typeof num1 === "number" && typeof num2 === "number"){
    console.log("Number one is:" + num1 + " and Number two is:" + num2);
    onSuccess(num1, num2);
    }
    else{
    onFailure();
    }
}

// function add(no1, no2){
//     console.log("And the addition of two number is:" + (no1 + no2));
// }

getnumbersandadd(4 , 3, (no1,no2)=>{
    console.log("And the addition of two number is:" + (no1 + no2));
}, ()=>{
    console.log("Incorrect data type");
} );

// Callbacks in Asynchronous javascript

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(() => {
//     heading1.textContent = "one";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "two";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "three";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "four";
//                 heading4.style.color = "pink";
//                 setTimeout(() => {
//                     heading5.textContent = "five";
//                     heading5.style.color = "green";
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000)
// }, 1000);


function changeText(element, text, color, time, onSucesscallback, onFailurecallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSucesscallback) {
                onSucesscallback();
            }
            else {
                if (onFailurecallback) {
                    onFailurecallback();
                }
            }
        }
    }, time);
}

// Pyramid dooom
changeText(heading1, "one", "red", 1000, () => {
    changeText(heading2, "two", "green", 1000, () => {
        changeText(heading3, "three", "blue", 1000, () => {
            changeText(heading4, "four", "orange", 1000, () => {
                changeText(heading5, "five", "cyan", 1000, () => {
                    changeText(heading6, "six", "yellow", 1000, () => {
                        changeText(heading7, "seven", "brown", 1000, () => {
   
                        }, ()=>{console.log("Heading 7 does not exist")});
                    }, ()=>{console.log("Heading 6 does not exist")});
                }, ()=>{console.log("Heading 5 does not exist")});
            }, ()=>{console.log("Heading 4 does not exist")});
        }, ()=>{console.log("Heading 3 does not exist")});
    }, ()=>{console.log("Heading 2 does not exist")});
}, ()=>{console.log("Heading 1 does not exist")});