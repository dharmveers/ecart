const validation=async(user)=>{
    let errors={
        username:"",
        email:"",
        pass:"",
        confirmPass:"",
        mobNo:"",
        address:"",
    
    }
    const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passPattern=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    //username validation
    if(user.username===""){
        errors.username="username is required";
    }
    //email validation
    if(user.email===""){
        errors.email="email Id is required";
    }else if(!emailPattern.test(user.email)){
        errors.email="please enter valid email";
    }
    //password validation
    if(user.pass===""){
        errors.pass="password is required";
    }else if(user.pass.length<6){
        errors.pass="password length mut be > 6";
    }else if(!passPattern.test(user.pass)){
        errors.pass="please enter valid password";
    }
    //confirmPass validation
    if(user.confirmPass===""){
        errors.confirmPass="Confirm password is required";
    }else if(user.pass!==user.confirmPass){
        errors.confirmPass="Confirm password not matched";
    }
    //mobileNo validation
    if(user.mobNo===""){
        errors.mobNo="Mobile No is required";
    }
    else if(user.mobNo!=="" && user.mobNo.length!==10){
        errors.mobNo="Please enter 10 digit mobNo";
    }
    
    if(user.address===""){
        errors.address="Address is required";
    }
    
    return errors;
}
export default validation;