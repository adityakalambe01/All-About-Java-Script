function hello(name){
    var greeting;
    if(name === null || name.trim() === ""){
        greeting = "You didn't give me a name";
    }else{
        greeting =`Hello ${name}!`;
    }
    return greeting;
}

console.log(
    hello(
        prompt("Provide your name","")
    )
)