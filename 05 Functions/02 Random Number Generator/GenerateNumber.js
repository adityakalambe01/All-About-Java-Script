function randomNumber(min, max){
    // var chances = max - min + 1;
    // var randomValue = Math.random() * chances;
    // var floorValue = Math.floor(randomValue);
    // var resultantValue = floorValue + min;
    // console.log(resultantValue);

    console.log(
        Math.floor(Math.random()*(max - min + 1)) + min
    );
}

randomNumber(5,10);