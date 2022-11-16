function myPromise(){
    return new Promise((resolve,reject)=>{
        const value = true;
        setTimeout(()=>{
            if(value){
                resolve();
            }
            else{
                reject();
            }
        }, 1000);
    })
}

myPromise().then(()=>{
    console.log("Resolved");
}).catch(()=>{
    console.log("Rejected");
})