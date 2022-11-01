const extraInfo = new Map();
const user1 = {
    Firstname: "Kuldeep",
    Age: 20
}
const user2 = {
    Firstname: "Mohit",
    Age: 22
}

extraInfo.set(user1, {DOB: 2002, Gender: "Male" } );
extraInfo.set(user2, {DOB: 2003, Gender: "Male" } );

console.log(extraInfo);
console.log(extraInfo.get(user1).DOB);