// Execution Context, Hoisting & Scope

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

var nama = 'Albert';
var umur = '20';

function sayHello(){
    return `Hi nama saya ${nama}, saya berusia ${umur} tahun.`
}

console.log(sayHello(),'\n\n');

// fungsi didalam fungsi 

function a(){
    console.log('ini a');
    function b(){
        console.log('ini b');
        function c(){
            console.log('ini c');
        }
        c();
    }
    b();
}
a();

console.log('\n');

var nama = 'Albert'
var username = 'abe_kolin'

function cetakURL(){

    var URL = 'http://instagram.com/'
    return URL + username;

}

console.log(cetakURL());

// Closure
console.log('\n\x1b[4mTopik Closure\n');

function init(){
    // let nama = 'Abe'; // local variabel
    return function(nama){ // inner function (closure*)
        console.log(nama); // akses ke parent variabel
    }
//    return tampilNama;
}
let panggilNama = init();

panggilNama('Akil\n\n');

// lexical scope
// factories function
function ucapkanSalam(waktu){
    return function (nama){
        console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatMalam = ucapkanSalam('malam');

selamatPagi('Aldino');
selamatMalam('Abe');
selamatSiang('Pures');

console.log('\n');
let counter = 0;
let add = (function (){
    return function (){
     return ++counter;  
    } 
})();

console.log(add());
console.log(add());
console.log(add());

