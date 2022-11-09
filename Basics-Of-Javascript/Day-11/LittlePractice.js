const button = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");
console.log(currentColor);
function changeColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue} )`;
    return color;
}

button.addEventListener("click", ()=>{
    const randomColor = changeColor();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})