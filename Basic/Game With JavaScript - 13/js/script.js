// menangkap pilihan player
do{
var p = prompt('pilih : gajah, semut, orang');

// menangkap pilihan computer
// membangkitkan bilangan random

var comp = Math.random();
console.log(comp);

if( comp < 0.34 ){
    comp = 'gajah';
}else if( comp >= 0.34 && comp < 0.67){
    comp = 'orang';
}else{
    comp = 'semut';
}

// menentukan rules
var hasil = '';
if( p == comp){
   hasil = 'SERI!';
}else if(p == 'gajah'){
  hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH';
}else if(p == 'orang'){
    hasil = (comp == 'semut') ? 'MENANG!' : 'KALAH';
}else if(p == 'semut'){
    hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH';
}else{
    hasil = 'Memasukan pilihan yang salah!';
}

// tampilan hasilnya
alert('Kamu memilih : ' + p + ' dan komputer memilih : '+ comp + '\nMaka hasilnya : Kamu '+hasil);
}while(confirm('main lagi?'));

alert('Terimakasih sudah bermain..');