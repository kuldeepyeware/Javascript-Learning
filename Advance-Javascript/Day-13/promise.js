// Promise

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// Produce
const friedRice = new Promise((resolve, reject) => {
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Work done");
    }
    else{
        reject("Something is missing");
    }
})

// Consume

friedRice.then((myfriedrice)=>{
    console.log(myfriedrice);
}, (error)=>{
    console.log(error);
})