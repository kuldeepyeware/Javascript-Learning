// Function returning promise

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

function ricePromise(){
    return new Promise((resolve, reject) => {
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("Work done");
        }
        else{
            reject("Something is missing");
        }
    })
}

ricePromise(). then((myfriedrice)=>{
    console.log(myfriedrice);
}, (error)=>{
    console.log(error);
})