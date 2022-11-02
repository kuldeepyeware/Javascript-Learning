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
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
    }
    fishSpeed(){
        return `The fish speed is ${this.speed}km/hr`
    }
}
const Fish1 = new Fish("Shark", 4, 20);
console.log(Fish1.animalName());
// The animal is Shark
console.log(Fish1.fishSpeed());
// The fish speed is 20km/hr