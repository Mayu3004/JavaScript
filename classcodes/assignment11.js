
const someObj = {
    person :{
        eyeSight:20,
        isWorking:true,
        practice:[
            {day1:"1",hrs:undefined,goal:null},
            {day1:"2",hrs:2,goal:true},
            {day1:"3",hrs:3,goal:false},
        ],
        address:{
            company:null,
            home:{
                city:"Pune",
                country:"India",
                coords:{
                    lat:1,
                    long:2
                }
            }
        }
    },
    age:null,
    height:undefined
}

// const value = Object.keys(someObj)

// const valu1 = Object.values(someObj);
// console.log(valu1)
// const obj = (value)=>{
//     if(value.keys !== 'undefined' || value.keys !== 'null'){
//         obj.push(value);
//     }
// }
//console.log(obj)

//  const object = JSON.parse(JSON.stringify(someObj))
//  console.log(object)

 const newOutput = (obj) => {
    return JSON.parse(JSON.stringify(obj, (key, value) => {
      return (value === null ? undefined : value);
      //console.log(key,value)
    }));
  };
  const ans = newOutput(someObj);
  console.log(ans)