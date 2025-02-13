// hoisting
// var i = undefined
console.log(i);
var i = 10; // ini undefined

// console.log(i);
// let i = 10; // akan error sama dengan const

function test(){
for( let i = 0; i < 10; i++){ //block scope jika memakai let
    console.log(i);
}
console.log(i);
}
test();

// imedietly function expression
(function(){
    for( var i = 0; i <= 20; i++){
        console.log(i);
    }
}());
// console.log(i); // -> error

// jadi let dan const menganut block scope dan var tidak

// const S = 10; -> erorr haru konstanta
// S = 12;