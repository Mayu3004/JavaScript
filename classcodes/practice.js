// function digitalRoot(n) {
//     // ...
//     let sum = 0;
//     let counter = 0;
//     while(counter !==1){
//         counter = 0;
//       while(n!==0){
//         let rem = n%10;
//         sum += rem;
//         n =Math.floor(n/10);

//       }
//       n = sum;
//       while(sum !==0){
//         counter++;
//         sum = Math.floor(sum/10)
//       }
//       //console.log(n);
//       //console.log(counter);

//     }
//     return n;
//   }
//    const ans = digitalRoot(456);
//     console.log(ans)

// function digitalRoot(n) {

//     if(n === 0){
//         return 0;
//     }else{
//     let arr = String(n).split("").map(n=>Number(n));
//     //console.log(arr)
//     //console.log(arr.length)
//     while(arr.length!==1){
//         let sum = 0;
//         arr.forEach(num=>sum+=num)
//         //console.log(sum)
//         if(sum>=10){
//             arr = String(sum).split("").map(n=>Number(n));
//         }else{
//         return sum;
//         }
//     }
// }
    
// }
//  const ans = digitalRoot(0)
// console.log(ans)



// function persistence(num) {
//     //code me
//    if(num<9){
//      return 0;
//    }else{
//      let arr = String(num).split("").map(n=>Number(n));
//      //console.log(arr)
//      //console.log(arr.length)
//      let count = 1;
//      while(arr.length!==1){
//          let mult = 1;
//          arr.forEach(n=>mult*=n)
//          //console.log(mult)
//          if(mult>=10){
//              arr = String(mult).split("").map(n=>Number(n));
//              count++;
//          }else{
//            return count;
//          }
//      }
//      //console.log(count)
//    }
//  }

//  const ans =  persistence(999);
//  console.log(ans)


// function isPrime(num) {
//   //TODO
//   if(num === 0||num ===1){
//     return true;
//   }
//   if(num % i === )
// }


// function isPrime(num) {
//   //TODO
//   let value = 1;
//   if(num === 0||num === 1 ){
//     return false;
//   }
//   if(num === value){
//     return true;
//   }
//   if(num % value === 0){
//     return false;
//   }
//   value++;
//   return isPrime(num);
// }

// const ans=isPrime(3)
// console.log(ans)


// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); ++i) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function alphabetPosition(text) {
  
//   let arr = [];
//  // const str = text.toUpperCase().split(" ").join("");
//   const str =text.toUpperCase().replace(/[^A-Z]/ig, "");
//   console.log(str)
//   for(let index = 0;index<str.length;index++){
//     const codeValue = str.charCodeAt(index) - 64;
//     arr.push(codeValue);
//   }
//   //console.log(arr);
//   return arr.join(" ");
// }
// const ans = alphabetPosition("8&3eh!ro")
// console.log(ans)

// function squareDigits(num){
  
//   let numArray = String(num).split("").map(n=>Number(n));;
//   console.log(numArray);

//   const res = numArray.map(n=>n*n);
//   console.log(res.join(""));

//   return 0;
// }
// squareDigits(1234)

// function narcissistic(value) {
//   // Code me to return true or false
//   let numArray = String(value).split("").map(n=>Number(n));
//   console.log(numArray)
//   const counter = numArray.length;
//   const res = numArray.map(n=>n**counter);
//   const sum = res.reduce( (a,b)=> a+b );
//   console.log(sum)
//   console.log(res)
//   if(value === sum){
//     return true;
//   }else{
//     return false;
//   }
// }
// const ans = narcissistic(153)
// console.log(ans)




// function bouncingBall(initial, proportion) {
//   // your code here
//   let counter = 0;
//   while(initial>1){
//     //console.log("in counter")
//     counter++;
//     initial = initial*proportion;
//   }
//   return counter;

// };

// const ans = bouncingBall(100,0.1);
// console.log(ans)




// var maxSequence = function(arr){
//   // ...
//   let max_value = 0;
//   let max_end = 0;
//   for(let index =0;index<arr.length;index++){
//     max_end = max_end+arr[index];
//     if(max_end < 0){
//       max_end = 0;
//     }if(max_value<max_end){
//       max_value = max_end;
//     }
//   }
//   return max_value;
// }

// const ans = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// console.log(ans)



// function findEvenIndex(arr)
// {
//   //Code goes here!
//   let leftSum = 0;
//   let totalSum = 0;
//   totalSum = arr.reduce((a,b)=>a+b)
//   let rightSum = totalSum;
//   for(let index = 0;index<arr.length;index++){
//       rightSum -= arr[index];
//       if(leftSum === rightSum){
//         return index;
//       }
//       leftSum += arr[index];
//   }
//   return -1;
//   //console.log(totalSum);
// }

// const ans =findEvenIndex([1,2,3,4,3,2,1])
// console.log(ans)



// function highAndLow(numbers){
//   // ...
//   let num = numbers.split(" ").map((n)=>Number(n));
//   console.log(num)
//   let highLow =[];
//   let max=0;
//   let min;
//   for(let index = 0;index<num.length;index++){
//     if(num[index]>max){
//       max = num[index];
//     }else{
//       min = num[index];
//     }
//   }
//   console.log(max);
//   console.log(min);
//   highLow[0] = max;
//   highLow[1] = min;

 
//   return highLow.join(" ")

  
// }


// function highAndLow(numbers){
//   let arr = numbers.split(' ').map(Number);  
//   return Math.max(...arr) + ' ' + Math.min(...arr);
// }
// const ans = highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
// console.log(ans)



// function getCount(str) {
//   let arr = str.split("");
//   let count = 0;
//   console.log(arr)
//   for(let index = 0;index<arr.length;index++){
// if(arr[index] === 'a' ||arr[index] === 'e' ||arr[index] === 'i' ||arr[index] === 'o' ||arr[index] === 'u'){
//   count++
// }

//   }
//   return count;
// }

// const ans = getCount('abracadabra')
// console.log(ans)




// function order(words){
//   // ...
//   let wordArr = words.split(" ")
//   console.log(wordArr)
//   let newNumArr = [];

//   for(let index = 0;index<wordArr.length;index++){
//     let num = wordArr[index].match(/\d/g);
//     newNumArr[num] = wordArr[index];
//   }
//   return newNumArr.join(" ");
// }

// const ans =order("is2 Thi1s T4est 3a")
// console.log(ans)









// var uniqueInOrder=function(iterable){
//   //your code here - remember iterable can be a string or an array
//   let strValue = iterable;
//   let newArr =[];
//   if(typeof strValue === 'string'){
     
//     strValue.split('')

//   }
//   if(strValue.length === 0){
//     return [];
//   }
//   else if(strValue.length === 1){
//     return [strValue[0]]
//   }
//   else{
//     for(let index = 0;index<strValue.length;index++){
//       while(strValue[index]===strValue[index+1]){
//         index++;
//       }
//       newArr.push(strValue[index]);
//     }
//   }
//   console.log(newArr)
//   //console.log(strValue);
// }

// uniqueInOrder('AAAABBBCCDAABBB')


// function multiply(number){
//   //your code here
//   const temp = number;

//   let arr = String(temp).split('').map(Number);
//   let count = arr.length
//   console.log(count)
//   return number>0?number * (5**count):number * (5**(count-1));

  
// }
//  const ans = multiply(-2)

//  console.log(ans)


// function numberPlay(num,p){

//   let temp = num
//   let arr = String(num).split('').map(Number);
//   console.log(arr)
//   for(let i = 0;i<arr.length;i++){
//     arr[i] = arr[i]**p;
//     p++;
//   }
//   console.log(arr)
//   const ans = arr.reduce((a,b)=>a+b)
//   console.log(ans)
//   const rem = ans % temp;
//   const quoitent = ans /temp;
//   return rem === 0 ? quoitent:-1;
// }

// const ans = numberPlay(46288,3);
// console.log(ans)

function sumDigPow(a, b) {
  // Your code here
  
  let arr = [];
  for(let i = a;i<=b;i++){
    if(i<10){
      arr.push(i);
    }else{
      if(newNumber(i)){
        arr.push(i)
      };
    }
  }
  //console.log(arr)
  return arr
}
function newNumber(num){
  let temp = num;
  let arr = String(num).split('').map(Number);
  let p = 1;
  for(let i = 0;i<arr.length;i++){
    arr[i] = arr[i]**p;
    p++;
  }
  let ans = arr.reduce((a,b)=>a+b)
 
  //console.log(ans)
  return ans===temp;
}
const ans = sumDigPow(50,150);
console.log(ans)












































































