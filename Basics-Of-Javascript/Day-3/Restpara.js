const addAll = (...numbers) => {
    let total = 0;
    for(number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(1,2,3,4,5,6,7,8,9,10);
console.log(ans);