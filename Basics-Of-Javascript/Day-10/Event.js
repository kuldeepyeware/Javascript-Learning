// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", () => console.log("Hello I am clicked"));
// Return on console Hello I am clicked when we click on button  

const allButton = document.querySelectorAll("button");


for(let button of allButton){
    button.addEventListener("click", function(e){
        console.log(e.currentTarget);
    })
}

// Event Objects