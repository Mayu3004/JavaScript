const computers = [
    {name: "a", power:5000},
    {name: "b", power:5000},
    {name: "c", power:5000},
    {name: "d", power:5000},
    {name: "e", power:5000},
]

const foundValue = computers.find(r => r.name==="e")
console.log(foundValue)

// impelmetations of find 

const find = (array,cb) =>{
    
    for(let i = 0;i<array.length;i++){
        const element = array[i];
        if(cb(element)){
            return element;
        }
    }
}