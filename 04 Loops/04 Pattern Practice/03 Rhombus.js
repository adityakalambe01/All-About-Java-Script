var n = 5;

for(var i = 1; i <=n ; i++){
    for(var j = n-i; j>=1 ; j--){
        process.stdout.write(" ");
    }
    for(var j = 1; j<=n ; j++){
        process.stdout.write("* ");
    }
    console.log();
}
//     * * * * * 
//    * * * * *
//   * * * * *
//  * * * * *
// * * * * *