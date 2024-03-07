var food = ["cheese", "fruits", "chicken", "candy", "dessert"];
var name = prompt("Provide your name","");


function hello(name){
    var greeting;
    greeting = (name === null || name.trim() === "") ? "You did'n give me a name" : `Hello ${name}, and welcome!`;
    return greeting;
}

function hospitality(name, gift){
    console.log(
        hello(name)
    );

    for(var i = 0; i < name.length; i++){
        console.log(
            `${name}, would you like some ${gift[i]}?`
        );
    }
}

hospitality(name, food)




