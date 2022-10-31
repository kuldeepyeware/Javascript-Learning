const number = [1,2,3,44,25,324,4,23,567,5,29];

const lowToHigh = number.slice(0)
const highToLow = number.slice(0)
lowToHigh.sort((a,b) => a - b);
highToLow.sort((a,b) => b - a);
console.log(number);
console.log(lowToHigh);
console.log(highToLow);