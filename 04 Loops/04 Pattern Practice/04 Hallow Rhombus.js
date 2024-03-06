var n = 6;

for(var i = 0; i < n; i++){
    for(var j = n-1-i; j > 0; j--){
        process.stdout.write("  ")
    }
    for(var j = 0; j < n; j++){
        if(i==0 || i==(n-1) || j==0 || j==(n-1)){
            process.stdout.write("* ");
        }else{
            process.stdout.write("  ");
        }
    }
    console.log();
}
//      * * * * * * 
//     *         *
//    *         *
//   *         *
//  *         *
// * * * * * *
