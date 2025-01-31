// fungsi ekspresi
var ekspresi = function (name = "abe dengan function expresion"){
    return "halo nama saya "+name;
} 
console.log(ekspresi());

// fungsi deklarasi
function deklarasi(name){
    return "halo nama saya "+name;
}
console.log(deklarasi("abe dengan function declaration "));
