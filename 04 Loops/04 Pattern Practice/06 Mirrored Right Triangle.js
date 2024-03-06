var n = 5;

for(var i = 0; i < n; i++){
    for(var j = n-1-i; j > 0; j--){
        process.stdout.write("  ");
    }

    for(var j = 0; j <= i; j++){
        process.stdout.write("* ");
    }
    console.log();
}