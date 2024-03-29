// Write a for loop to print

const people = [
    {name: "a",age:20,isHungry:true},
    {name: "b",age:21,isHungry:true},
    {name: "c",age:22,isHungry:true}
]

for(let index = 0;index<people.length;index++){
    const {age} = people[index];
    console.log(age)
}
for(let index in people){
    const {age} = people[index];
    console.log(age)
}
for(let {age} of people){
    console.log(age);
}