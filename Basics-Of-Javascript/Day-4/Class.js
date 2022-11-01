
class CreateUser{
   constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}

about = function(){
    return `First Name: ${this.firstName}, Lastname: ${this.lastName}`;
};

isFemale =  function(){
            return this.gender === "Female";
};
}

const user1 = new CreateUser("Kuldeep","Yeware",20,"Male");
const user2 = new CreateUser("Mohit","Sharma",22,"Male");
const user3 = new CreateUser("Renuka","Agarwal",23,"Female");

console.log(user3.about());
console.log(user3.isFemale());
console.log(user1.about());
console.log(user1.isFemale());