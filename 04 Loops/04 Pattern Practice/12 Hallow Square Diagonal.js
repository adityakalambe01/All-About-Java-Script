var n = 9;

for(var i = 1; i <= n; i++){
    for(var j = 1; j <= n; j++){
        if(i==1 || j==1 || i==n || j==n || i==j || j==(n-i+1)){
            process.stdout.write("* ");
        }else{
            process.stdout.write("  ");
        }
    }
    console.log();
}


// * * * * * * * * * 
// * *           * *
// *   *       *   *
// *     *   *     *
// *       *       *
// *     *   *     *
// *   *       *   *
// * *           * *
// * * * * * * * * *