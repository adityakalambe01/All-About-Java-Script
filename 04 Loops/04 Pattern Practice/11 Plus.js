var n = 5;

var mid = Math.ceil(n/2);


for(var i = 1; i <= n; i++){
    for(var j = 1; j <= n; j++){
        if(i==mid || j==mid){
            process.stdout.write("+ ");
        }else{
            process.stdout.write("  ");
        }
    }
    console.log();
}

//     +     
//     +
// + + + + +
//     +
//     +