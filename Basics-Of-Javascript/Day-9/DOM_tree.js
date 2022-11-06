const rootNode = document.getRootNode();
console.log(rootNode);
// #document

const htmlElementNode = rootNode.childNodes[1];
console.log(htmlElementNode);
// html

const headNode = htmlElementNode.childNodes[0];
console.log(headNode);
// <head>...</head>

const textNode = htmlElementNode.childNodes[1];
console.log(textNode);
// #text

const bodyNode = htmlElementNode.childNodes[2];
console.log(bodyNode);
// <body>...</body>

const siblingBody = headNode.nextElementSibling;
console.log(siblingBody);
// <body>...</body>

const h2 = document.querySelector("h2");
const h2ParentNode = h2.parentNode ;
h2ParentNode.style.backgroundColor = "black";

const tp = headNode.children;
console.log(tp);
// HTMLCollection(6) [meta, meta, meta, title, link, script, viewport: meta]