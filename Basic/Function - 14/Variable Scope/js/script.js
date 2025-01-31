// global scope
// "use strict";
// name conflict
var a = 1;

function test(a){
    console.log(a)
}

test(a);
console.log(a);