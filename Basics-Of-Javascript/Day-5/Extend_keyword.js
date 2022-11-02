class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    animalName(){
        return `The animal is ${this.name}`;
    }

    animalAge(){
        return `The animal age is ${this.age}`;
    }
}

const animal1 = new Animal("Dog", 4);
console.log(animal1.animalName());
// The animal is Dog
console.log(animal1.animalAge());
// The animal age is 4


class Fish extends Animal{
    fishName(){
        return `The fish name is ${this.name}`
    }
}
const Fish1 = new Fish("Shark", 4);
console.log(Fish1.animalName());
// The animal is Shark
console.log(Fish1.fishName());
// The fish name is Shark