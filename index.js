var i = 1;
var a = process.argv[2];
var limit = process.argv[3] || 12;

for(; i <= limit; i++){
    var answer = i * a;
    console.log(i + " * " + a + " = " + answer);
}