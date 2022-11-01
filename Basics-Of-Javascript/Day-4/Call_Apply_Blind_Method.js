function info(gender, dob){
    console.log(`Name is ${this.firstName}, age is ${this.age}, Gender is ${gender} and DOB is ${dob}`)
}

const user1 = {
    firstName: "Kuldeep",
    age: 20
}
const user2 = {
    firstName: "Mohit",
    age: 22
}
const user3 = {
    firstName: "Renuka",
    age: 25
}

info.call(user1, "Male", 2002);
info.apply(user2, ["Male", 2005]);
const func = info.bind(user3, "Female", 1997);
func();