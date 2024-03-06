var age = 18;

var stringAge = "18";


var nonNum = "chicken";

var op = nonNum - age; // result is NaN (Not A Number) if we write inside if then the it returns false

if(age == stringAge){
    console.log("Inside if");
}else{
    console.log("Inside else");
}

if(age === stringAge){
    console.log("Inside if");
}else{
    console.log("Inside else");
}

