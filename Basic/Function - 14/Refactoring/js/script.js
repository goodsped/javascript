// program menghitung volume kubus
function volumeKubus(s1){
    return s1 * s1 * s1;

}
function jumlahVolumeTigaKubus(v1,v2,v3){
    return v1 + v2 + v3;
}

p1 = parseInt(prompt('masukan volume kubus 1'));
p2 = parseInt(prompt('masukan volume kubus 2'));
p3 = parseInt(prompt('masukan volume kubus 3'));

v1 = volumeKubus(p1);
v2 = volumeKubus(p2);
v3 = volumeKubus(p3);

hasil = jumlahVolumeTigaKubus(v1,v2,v3);

alert('hasil dari '+v1+' + '+v2+' + '+v3+' adalah : '+hasil);