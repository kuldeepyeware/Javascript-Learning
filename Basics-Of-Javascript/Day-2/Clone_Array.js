let array1 = ["item1", "item2"];

let array2 = [... array1].concat("item10","item11");

// let array2 = [].concat(array1, ["item13", "item45"]);

// let array2 = array1.slice(0).concat("item13","item45");

console.log(array1 === array2);

array1.push("item3");

console.log(array1);
console.log(array2);