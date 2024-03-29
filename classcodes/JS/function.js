
const arr = [1,34,21,30,12];
const myAge = 21;
function isAgePresent(arr,myAge){
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === myAge){
            return true;
        }
    }
    return false;
}

const isAgePresent1 = function(arr,myAge){
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === myAge){
            return true;
        }
    }
    return false;
}

const isAgePresent2 = (arr,myAge) => {
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === myAge){
            return true;
        }
    }
    return false;
}