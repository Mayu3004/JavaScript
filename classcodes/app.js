// 3 storey 
// 3 floor hard liquer
//2 soft liqour
//1 branch

const age = 18;
if(age<0 && age>100){
    console.log("wrong input")
}
else if(age>25 ){
    console.log("Welcome to the 3 floor you can have hard liquor");
}else if(age<=18 && age<=25){
    console.log("Your can stay on 2 floor");
}else{
    console.log("Welcome to 1 floor");
}

const message = age>= 25 ? "Welcome to the 3 floor you can have hard liquor":
                age<=18 && age<=25 ? "Your can stay on 2 floor":
                "1 floor";

