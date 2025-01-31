// false
var x = 5;
console.log(x % 2 == 0);

// false
x = 12;
console.log((x % 2 == 0) && (x < 10));

// true
x = 5;
console.log((x % 2 == 0) || (x < 10));

// true
var y = 10;
console.log((y < 20));

// false
console.log(!(y < 20));
