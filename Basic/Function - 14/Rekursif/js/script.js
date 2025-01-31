// rekursif untuk menggantikan lopping
function tampilAngka(n){

    if(n == 0) return;
    console.log(n);
    return tampilAngka(n-1);
}

tampilAngka(10);

// faktorial
function faktorial(n){

    if(n == 0) return 1;
    return n * faktorial(n-1);
   

}
console.log(faktorial(5));

function faktorialTanpaRekursif(n){
    var hasil = 1;
    var i = n;
    while(i > 0){
        hasil = hasil * i;
        i--;
    }
    return hasil;
}

console.log(faktorialTanpaRekursif(5));