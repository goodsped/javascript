
/* 
<-- prompt -->
var nama;
var nama = prompt('Masukan Nama:');

<-- alert -->
alert('hallo! '+nama);

 <-- confirm -->
var message = confirm('kamu yakin??');
alert(message);
if(message == true){
     var nama = prompt('Masukan Nama:');
     alert('hallo! '+nama);
}else{
     alert('user menekan tombol cancel')
}
*/     

alert('selamat datang..');
var lagi = true;

while(lagi == true){
    var nama = prompt('masukan nama:');
    alert('halo '+ nama);

    lagi = confirm("coba lagi??");
}

alert('terimakasih..');
