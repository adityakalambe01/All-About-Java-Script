var n = 8;

for(var i = 1; i <= n; i++){
    for(var j = n-i; j >= 0; j--){
        process.stdout.write(" ");
    }


    for(var j = 1; j <=i; j++){
        process.stdout.write("* ");
    }
    console.log();
}