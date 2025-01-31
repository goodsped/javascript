alert('Hallo Albert!, silahkan masukan data angkot anda yang tidak beroprasi');

var angkotBeroprasi = prompt('masukan jumlah angkot yang beroprasi!');

var jumlahAngkot = 10;
var noAngkot;

for(noAngkot = 1; noAngkot <= angkotBeroprasi; noAngkot++){
    console.log('Angkot No. '+noAngkot+' beroprasi dengan baik.');
}

while(noAngkot <= jumlahAngkot ){
    console.log('Angkot No. '+noAngkot+' sedang tidak beroprasi.');
    noAngkot++;
}
