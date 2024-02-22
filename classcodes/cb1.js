const arr = [1,2,3,4,5];

const evenSquare = arr.map(n=>{
    if(n%2===0){
        return n*n;
    }
    else{
        return n*n*n;
    }
});
console.log(evenSquare)