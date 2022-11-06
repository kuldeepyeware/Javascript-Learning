const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);
// <section class="section-todo container">…</section>

sectionTodo.classList.add("bg-dark");
// Add another class

sectionTodo.classList.remove("bg-dark");
// Remove the class

const ans = sectionTodo.classList.contains("bg-dark");
console.log(ans);
// false

sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.toggle("bg-dark");
// If class is not present then it will add and if present it will remove 

 
