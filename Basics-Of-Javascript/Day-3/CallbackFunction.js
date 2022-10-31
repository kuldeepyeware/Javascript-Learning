const Hello = (name) => {
    console.log("Hello world");
    console.log(`My name is ${name}`);
};

const Main = (callback) => {
    console.log("I am the boss");
    callback("Kuldeep");

}

Main(Hello);
Hello("Rohit");