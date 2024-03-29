// takes an array
const arr = ['a','b','c','d'];
const upperCase = (arr) =>{
    for(let i = 0;i<arr.length;i++){
        arr[i] = arr[i]-32;
    }
    return arr;
}

const lowerCase = (arr) =>{
    for(let i = 0;i<arr.length;i++){
        arr[i] = arr[i]+32;
    }
    return arr;
}

const modifyArray = (cb) =>{

    const array = cb();
    console.log(cb);
}

modifyArray(upperCase(arr));

const reduce = (array,cb,num) =>{
    let number;
    for(let i = 0;i<array.length;i++){
        const modifyElement = array[i];

    }
}