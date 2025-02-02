// this
var a =  10;
console.log(this) //object global

// 1. dengan function declaration
function halo(){
    console.log(this);
    console.log('halo');
}

this.halo();
// this mengembalikan object global 

// 2. object literal
var obj = {}
obj.halo = function(){
    console.log(this);
    console.log('halo');
}

obj.halo();
// this mengembalikan object yang bersangkutan 

// 3. constructor
function Halo(){
    console.log(this)
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat
