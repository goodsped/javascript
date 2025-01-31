// fungsi parseInt untuk mengubah inputan string menjadi integer
/*var angka = parseInt(prompt('Masukan angka :'));

if(angka === 1){
    alert('Anda memasukan angka 1')
}
else if(angka === 2){
    alert('Anda memasukan angka 2')
}
else if(angka === 3){
    alert('Anda memasukan angka 3');
}
else{
    alert('Yang anda masukan bukan angka!');
}
*/
var item = prompt('masukan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch( item ){
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan / minuman SEHAT!');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default :
        alert('anda memasukan nama makanan / minuman yang salah!')
}