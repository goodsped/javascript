// function penguranganDuaBilangan(a, b){
//     var total;
//     total = a - b;
//     return total;
// }

// a = prompt('masukan angka:');
// b = prompt( a + ' mau dikurangkan dengan berapa:');
// c = penguranganDuaBilangan(a, b);

// console.log(alert('hasil '+a+' - '+b+' adalah '+c));

// program menghitung volume kubus
function volumeKubus(s1){

    var total;
    total = s1 * s1 * s1;
    return total;

}
function jumlahVolumeDuaKubus(v1,v2,v3){

    var total;
    total = v1 + v2 + v3;
    return total;

}
p1 = prompt('masukan volume kubus 1');
p2 = prompt('masukan volume kubus 2');
p3 = prompt('masukan volume kubus 3');

v1 = volumeKubus(p1);
v2 = volumeKubus(p2);
v3 = volumeKubus(p3);

hasil = jumlahVolumeDuaKubus(v1,v2,v3);

alert('hasil dari '+v1+' + '+v2+' adalah : '+hasil);
