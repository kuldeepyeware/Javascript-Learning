console.log("Script Start");
function Hello(){
    console.log("Hello World");
}
const id = setTimeout(Hello, 1000);
console.log("The settimeout id is:", id);
clearTimeout(id);
// Clear Timeout will not run the id code
console.log("Script End");