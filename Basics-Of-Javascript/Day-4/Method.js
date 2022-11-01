function personInfo(){
    console.log(`Person name is ${this.firstname} and age is ${this.age}`)
};


const person1 = {
    firstname: "Kuldeep",
    age: 20,
    about: personInfo,
}
const person2 = {
    firstname: "Sandeep",
    age: 26,
    about: personInfo
}
const person3 = {
    firstname: "Rakesh",
    age: 12,
    about: personInfo
}

person1.about();
person2.about();
person3.about();
