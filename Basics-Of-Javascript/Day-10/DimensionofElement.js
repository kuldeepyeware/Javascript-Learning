const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
console.log(info);
// Gives height, width, left and right
const info1 = sectionTodo.getBoundingClientRect().height;
console.log(info1); 
// Return only height same case with width