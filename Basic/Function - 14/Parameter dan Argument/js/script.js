// program menghitung volume kubus
function volumeKubus(s1){

    var total;
    total = s1 * s1 * s1;
    return total;

}
function jumlahVolumeTigaKubus(v1,v2,v3){

    var total;
    total = v1 + v2 + v3;
    return total;

}
p1 = parseInt(prompt('masukan volume kubus 1'));
p2 = parseInt(prompt('masukan volume kubus 2'));
p3 = parseInt(prompt('masukan volume kubus 3'));

v1 = volumeKubus(p1);
v2 = volumeKubus(p2);
v3 = volumeKubus(p3);

hasil = jumlahVolumeTigaKubus(v1*2,v2*2,v3*2);

alert('hasil dari '+v1*2+' + '+v2*2+' + '+v3*2+' adalah : '+hasil);

// // program tambah
// function tambah(a = 1, b = 2){//parameter default
//     var total = a + b;
//     return total;
// }
// // program kali
// function kali(a, b){
//     var total = a * b;
//     return total;
// }

// var hasil = kali(tambah(), tambah()); //argument
// console.log(hasil);

// program tambah
function tambah(){
    var hasil = 0;
    for(i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

console.log(tambah(1,2,3,4,5));

// penelusuran looping
/* i = 0
hasil = 0
hasil = hasil + arguments[i]; 0 + 1 = 1
i++ = 1;
hasil = 1, 
hasil = hasil +  arguments[i]; 1 + 2 = 3 
i++ = 2
hasil = 3
hasil = hasil +  arguments[i]; 3 + 3 = 6
i++ = 3
hasil = 6
hasil = hasil +  arguments[i]; 6 + 4 = 10
i++ = 4
hasil = 10
hasil = hasil +  arguments[i]; 10 + 5 = 15
*/
