var n = 5;

for (var i = 1; i <= n; i++){
    for(var j = 1; j <= i; j++){
        if(i==1 || j==1 || j==i || i==n){
            process.stdout.write("* ");
        }else{
            process.stdout.write("  ");
        }
    }
    console.log();
}