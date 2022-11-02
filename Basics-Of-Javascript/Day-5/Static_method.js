class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `The First name is ${this.firstName} and Last name is ${this.lastName}`;
    }

    set fullName(fullName){
        const[firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static info(){
        return "This is called by class only";
    }
}

const person1 = new Person("Kuldeep", "Yeware", 20);
console.log(person1);
// firstName: "Kuldeep" lastName: "Yeware" age: 20

console.log(person1.fullName);
// The First name is Kuldeep and Last name is Yeware

person1.fullName = "Mohit Sharma"
console.log(person1.fullName);
// The First name is Mohit and Last name is Sharma

console.log(Person.info());
// This is called by class only