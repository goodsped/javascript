// array method

// foreach
var angka = [10,3,4,5,6,2,7,9,8,1];
var mhs = ['Abe', 'Aldino', 'Putra', 'Alfa', 'Clementino'];

// ini loop biasa 
console.log('Loop For');
for(i = 0; i < angka.length; i++){
    console.log(angka[i])
}

// ini loop foreach
console.log('\nLop Foreach')
angka.forEach(function(e){
    console.log(e);    
});
console.log('\nloop foreach array mhs\n\n')
mhs.forEach(function(e, i){
    console.log(e+' Mahasiswa ke '+(i+1));    
});

// map
console.log('\nloop menggunakan map\n')
var number = [1,2,3,4,5];
var map = number.map(function(e){
    return e * 2;    
});
console.log(map.join(' - '));

// sort
console.log('\n menampilkan array dgn sort');
angka.sort(function(a, b){
    return a-b;
});
console.log(angka.join(' - '));
