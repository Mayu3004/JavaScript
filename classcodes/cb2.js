const arr = [1,2,3,4,5];

const numberGreaterThan3 = arr.filter(n =>{
    if(n>3){
        return n;
    }
})
console.log(numberGreaterThan3)