let user ={};
const addUser = (uName,rollNo) =>{
    //User name and roll number stored
    console.log("data Added sucessfull");
    user[name] = uName;
    user[rollNo] = rollNo;
}

const deleteUser = (rollNo) =>{
    //delete record based on roll number
    console.log("data deleted sucessfull");
    
}

const updateUser = (rollNo,value) =>{
    // based on the roll number the value will be updated
        console.log("data updated sucessfull");
}

const showUser = ()=>{
    console.log(user.name + " " + user.rollNo);
}

export default{
    addUser,
    deleteUser,
    updateUser,
    showUser
}

