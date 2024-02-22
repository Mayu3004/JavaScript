// const arr = [1,2,3,4,5];

// setTimeout(()=>arr,3000);


// const getPrices = (handler) =>{
//     const prices = [10,20,30,40];
//     setTimeout(() => {
//         handler(prices);
//     }, 3000);
// }


// const getProducts = (handler) =>{
//     const products = ["P1","P2","P3","P4"];
//     setTimeout(() => {
//         handler(products);
//     }, 3000);
// }

// const getUsers = (handler) =>{
//     const users = [1,2,3,4];
//     setTimeout(() => {
//         handler(users);
//     }, 3000);
// }


// //callback hell

// getUsers(users =>{
//     getProducts(products=>{
//         getPrices(prices =>{
//             users.map((user, index) =>{
//                 // console.log("USER: ", user);
//                 // console.log("INDEX: ", index);
//                  console.log(`User ${user} brought the product ${products[index]} at price ${prices[index]}`)
//             })
//         })
//     })
// })

const getUsersWithPromise = () =>{
    return new Promise((resolve,reject)=>{
        const users = [1,2,3,4,5];
        setTimeout(()=>{
            const random = 0.6;
            if(random > 0.5){
                return resolve(users);
            }
            reject("something went wrong");
        },3000);
    })
}
const getProductsWithPromise = () =>{
    return new Promise((resolve,reject)=>{
        const products = ["P1","P2","P3","P4","P5"];
        setTimeout(()=>{
            const random = 0.6;
            if(random > 0.5){
                return resolve(products);
            }
            reject("something went wrong");
        },3000);
    })
}
const getPricesWithPromise = () =>{
    return new Promise((resolve,reject)=>{
        const prices = [10,20,30,40,50];
        setTimeout(()=>{
            const random = 0.6;
            if(random > 0.5){
                return resolve(prices);
            }
            reject("something went wrong");
        },3000);
    })
}

const userPromise = Promise.all([getUsersWithPromise(),getPricesWithPromise(),getProductsWithPromise()]);
userPromise.then((values) =>{
   console.log(values)
    for(let index = 0 ;index<values[0].length;index++){
        console.log(`User ${values[0][index]} brought the product ${values[2][index]} at price ${values[1][index]}`)
    }
    //console.log(values);
}).catch(err =>{
    console.log("Something went wrong")
})

// userPromise.then(users =>{
//     return getProductsWithPromise();
// }).then(products =>{
//     return getPricesWithPromise();
// }).then(prices =>{
//     //prices
    
// }).catch(err =>{
//     console.log("Something bad happened");
// })