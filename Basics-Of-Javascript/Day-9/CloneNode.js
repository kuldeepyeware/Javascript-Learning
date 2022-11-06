const ul = document.querySelector("ul");
console.log(ul);
const li = document.createElement("li");
li.textContent = "HEllo World";
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);