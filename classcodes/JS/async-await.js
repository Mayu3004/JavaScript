// async await

const getProductsWithAsync = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(response,users);
    }catch(e){
        console.log(e);
    }finally{
        console.log("Clear up")
    }
}
getProductsWithAsync()