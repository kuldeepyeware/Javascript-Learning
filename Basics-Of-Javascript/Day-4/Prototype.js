// const userMethod = {
//     about: function(){
//         return `First Name: ${this.firstName}, Lastname: ${this.lastName}`;
//     },  
//     isFemale: function(){
//         return this.gender === "Female";
//     }  
// }


function createUser(firstName, lastName, age, gender) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.gender = gender;
    return user;
}

createUser.prototype.about = function(){
    return `First Name: ${this.firstName}, Lastname: ${this.lastName}`;
};

createUser.prototype.isFemale =  function(){
            return this.gender === "Female";
};

const user1 = createUser("Kuldeep","Yeware",20,"Male");
const user2 = createUser("Mohit","Sharma",22,"Male");
const user3 = createUser("Renuka","Agarwal",23,"Female");

console.log(user3.about());
console.log(user3.isFemale());
console.log(user1.about());
console.log(user1.isFemale());