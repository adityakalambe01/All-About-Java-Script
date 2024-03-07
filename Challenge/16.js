var food = ["cheese", "fruits", "chicken", "candy", "dessert"];
var name = prompt("Provide your name","");


function hello(name){
    var greeting;
    if(name == null || name.trim() == ""){
        greeting = "You didn't give me a name";
    }else{
        greeting =`Hello ${name}!`;
    }
    return greeting;
}

function randomInt(min, max){
    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}

function hospitality(name, gift){
    console.log(
        hello(name)
    );

    var randomGift = randomInt(0, gift.length - 1);
    console.log(
        `${name}, would you like some ${gift[randomGift]}?`
    );
    
}

hospitality(name, food)




