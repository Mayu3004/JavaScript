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

// function sumDigPow(a, b) {
//   // Your code here

//   let arr = [];
//   for(let i = a;i<=b;i++){
//     if(i<10){
//       arr.push(i);
//     }else{
//       if(newNumber(i)){
//         arr.push(i)
//       };
//     }
//   }
//   //console.log(arr)
//   return arr
// }
// function newNumber(num){
//   let temp = num;
//   let arr = String(num).split('').map(Number);
//   let p = 1;
//   for(let i = 0;i<arr.length;i++){
//     arr[i] = arr[i]**p;
//     p++;
//   }
//   let ans = arr.reduce((a,b)=>a+b)

//   //console.log(ans)
//   return ans===temp;
// }
// const ans = sumDigPow(50,150);
// console.log(ans)

// function breakCamelCase(str){

//   const arr = str.split('');
//   console.log(arr); 
//   for (let i = 0; i < arr.length; i++) {

//     if(arr[i]>='A' && arr[i]<='Z'){

//       arr.splice(i,0," ");
//       i +=2; 
//     }
//   }
//   return arr.join('');
// }

// const ans = breakCamelCase('camelCaseInside')
// console.log(ans)

// function nat(n) {
//   return n >= 0 && Math.floor(n) === +n;
// }
// const ans = nat(12);
// console.log(ans)

// function add(n){

// function add(n){
//   var addNext = function(x) {
//     return add(n + x);
//   };

//   addNext.valueOf = function() {
//     return n;
//   };

//   return addNext.valueOf();
// }

// const ans = add(1)(2);
// console.log(ans)

// const add=(...n)=>{
//   const vsum=(a,c)=>a+c;
//   n=n.reduce(vsum,0);
//   const fn=(...x)=>add(n+x.reduce(vsum,0));
//   fn.toString=()=>n; 
//   return fn;
//  }

//  console.log(add(2)(1))

// function nextItem(xs, item) {
//   let val = xs.indexOf(item) - 1;
//   return xs[val + 1]
// }

// const ans = nextItem("testing", "t");
// console.log(ans)

// function nextItem(xs, item) {

//   console.log(xs)

//   if(xs.next) {
//     let val = xs.next().value;
//     //if(val) return;
//     while (val<=item){
//       if(val === item) return xs.next().value;
//       val = xs.next().value;
//     }
//     return undefined
//   }

//   let index = xs.indexOf(item);

//   if(index === -1) return;

//   return xs[index + 1];
// }
// function* countFrom(n) { for (let i = n; ; ++i) yield i; }
// // nextItem(countFrom(1), 12)

// const ans = nextItem(countFrom(1), 14);l


// console.log(ans)

// function invert(array) {

//   const newArr = array.map((ele)=>{
//     return -ele;
//   })
//   return newArr;
// }

// const ans = invert([])
// console.log(ans)


// function decimalToHexString(number)
// {
//   if (number < 0)
//   {
//     number = 0xFFFFFFFF + number + 1;
//   }

//   return number.toString(16).toUpperCase();
// }

// console.log(decimalToHexString(255));
// console.log(decimalToHexString(47));

// function rgb(r, g, b) {
//     let str ='';
//     if(r<=0){
//       str +='00';
//     }else if(r>255){
//       str +='FF';
//     }else{
//       let val =r.toString(16).toUpperCase();
//       str+= val.length === 1 ? 0+val:val;
//     }
//     if(g<=0){
//       str +='00';
//     }else if(g>255){
//       str +='FF';
//     }else{
//       let val=g.toString(16).toUpperCase();
//       str+= val.length === 1 ? 0+val:val;
//     }
//     if(b<=0){
//       str +='00';
//     }else if(b>255){
//       str +='FF';
//     }else{
//       let val=b.toString(16).toUpperCase();
//       str+= val.length === 1 ? 0+val:val;
//     }
//     console.log(str);
//   // for(let i = 0;i<3;i++){
//   //   if(r<=0)

//   // }
// }
// rgb(65,74,13)

// function sortArray(array) {
//   // Return a sorted array.
//   let oddArray = array.filter(e=>e%2!==0);
//   console.log(oddArray);
//   oddArray.sort((a,b)=>a-b)
//   console.log(oddArray)
//   console.log(array)
//   let j = 0;
//   for(let i = 0;i<array.length;i++){
//     if(array[i]%2!==0){
//       array[i] = oddArray[j];
//       j++; 
//     }
//   }
//   console.log(array)
// }

// sortArray([5, 3,2, 8,1,4, 11])




// function count(string) {
//   // TODO
//   let obj = {};
//   for(let char of string){
//     if(obj[char]){
//       console.log('inside1')
//       obj[char]++;
//     }else{
//       obj[char] = 1;
//       console.log('inside')


//     }
//   }
//   return obj;
// }


// function duplicateCount(text){
//   //...
//   text = text.toLowerCase();

//   let obj = {};
//   for(let char of text){
//     if(obj[char]){
//       console.log('inside1')
//       obj[char]++;
//     }else{
//       obj[char] = 1;
//       //console.log('inside')


//     }
//   }
//   let arr = Object.values(obj)
//   //console.log(Object.values(obj))
//   console.log(arr)
//  arr = arr.filter((ele)=>ele>=2);
//  console.log(arr)
//  return arr.length;
// }
// const ans = duplicateCount('abcda')
// console.log(ans)

// function pigIt(str){
//   let str1 = str.split(" ");
//   for(let i = 0;i<str1.length;i++){
//     let a = str1[i];
//     console.log(a)
//     let chr = a[0];
//     console.log(chr);
//     a.replaceAt(a.length-1,)
//     let b = `${a.split('').reverse('').join('')}ay`;
//     str1[i] = b;
//     console.log(b)

//   }
//   return str1.toString();  



//   function pigIt(str) {

//     let words = str.split(" ");

//     for (let i = 0; i < words.length; i++) {

//       for (let j = 0; j < words.length; j++) {

//         let firstWord = words[0];
//         let firstChar = firstWord[0];
//         let unshiftedWord = firstWord.unshift(0);
//         let newWord = unshiftedWord.push(firstChar) + "ay";
//         return newWord;

//       }
//     }
//   }


// const ans = pigIt("This is my string");
// console.log(ans)
// function pigIt(str) { 

//   newString = str.replace(/(\S)(\S+)/g, '$2$1ay');
//   return newString;
// }

// console.log(pigIt('Pig latin is cool'));

// const pigIt = (str) => str.replace(/(\w)(\w+)/g, '$2$1ay')


// function pigIt(str){
//   let newStr = '';
//   let str1 = str.split(" ");
//   for (let i = 0; i < str1.length; i++) {
//     let word = str1[i];
//     if(word.length === 1){
//       newStr += word+'ay'
//     }else{
//       newStr += word.replace(/(\w)(\w+)/g, ' $2$1ay')
//     }    
//   }
// }
// console.log(pigIt('Pig latin is cool'));

// function numDivisor(n){

//   let count = 0;
//   for(let i = 2;i<=Math.floor(n/2);i++){
//     if(n%i===0){
//       count++;
//     }
//   }
//   if(count ===3){
//       return true;
//   }
//   return false;
// }

// function solution(n, m) {
//   let arr = [];
//   for(let i = n;i<=m;i++){
//     let ans = numDivisor(i);
//     if(ans){
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// function numDivisor(n){
//   n = Number(n) //

//   let count = 0;
//   for(let i = 2;i<=Math.floor(n/2);i++){
//     if(n%i===0){
//       count++;
//     }
//   }
//   if(count === 3){
//     return true;
//     }
//   return false;
// }

// function solution(n, m) {
//   let arr = [];
//   for(let i = n;i<=m;i++){
//     let ans = numDivisor(i);
//     if(ans){
//       let num  = i;
//       arr.push(num);
//     }
//   }
//   return arr;
// }

// let ans = solution(2n,100n);
// console.log(ans)

// function gimmeTheLetters(sp) {
//   let arr = sp.split('-');
//   let res = '';
//   for(let i = sp.charCodeAt(0);i<=sp.charCodeAt(2);i++){
//     res+=String.fromCharCode(i);
//   }

//   console.log(res)

// }

// gimmeTheLetters("a-z");

// function isPrime(num){
//   //let count = 0;
//       for(let j = 1;j<num/2;j++){
//         if(num % j === 0){
//           return false;
//         }
//     }
//       return true;
//   };

// function total(arr){
//   if(arr.length === 0){
//     return 0;
//   }
//   else{
//     let sum = 0;
//     for(let i = 2;i<arr.length;i++){
//       let num = i;

//       if(isPrime(num)){
//         sum += arr[i];
//       }
//     return sum;
//   }
// }
// }



// function matrixMultiplication(a, b){
//   //TODO 
//   let res = new Array(2); 
//     for (let k = 0; k < 2; k++) 
//         res[k] = new Array(2); 

//   for(let i = 0;i<a.length;i++){
//     for(let j = 0;j<b.length;j++){
//       res[i][j] = 0; 
//             for (k = 0; k < 2; k++) {
//                 res[i][j] += a[i][k] * b[k][j]; 
//         } 
//     }
//   }
//   return res;
// }
// const ans = matrixMultiplication([[1, 2], [3, 2]], [[3, 2], [1, 1]])
// console.log(ans)

// function toCamelCase(str){
//   let arr = str.split(/[-,_]+/);
//   console.log(arr);
// }

// toCamelCase("the-stealt_ar")


function validISBN10(isbn) {
  // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
  if (isbn.length < 10 || isbn.length > 10) {
    return false;
  } else {
    let lastVal = isbn.slice(-1);
    console.log(lastVal)
    let arr = isbn.split('');
    console.log(arr)
    let pos = 1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (arr.length - 1 !== i) {
        if (isNaN(Number(val))) {
          return false;
        } else {
          sum += Number(arr[i]) * pos;
          pos++;
        }
      } else {
        if (lastVal === "X") {
          sum += 100;
        } else if (isNaN(Number(lastVal))) {
          return false;
        } else {
          sum += Number(lastVal) * 10;
        }
      }
    }

    if (sum % 11 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const ans = validISBN10("11A2223339");
console.log(ans);









































































































