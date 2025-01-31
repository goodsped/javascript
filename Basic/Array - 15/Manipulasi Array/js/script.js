// Manipulasi Array
// 1. Menambah isi Array
var arr = [];
arr[0] = "Albert";
arr[1] = "Kolin";
arr[2] = "Musik";
arr[3] = "Game";

console.log(arr);

// 2. Menghapus isi Array
var array = ["Albert", "Emen", "Alfa", "Aldino"];

array[1] = undefined;

console.log(array);

// 3. Menampilkan isi Array
var array = ["Albert", "Duncan", "Emen", "Alfa"];

for(var i = 0; i < array.length; i++){
    console.log('Mahasiswa ke-' + (i+1) + ' : '+ array[i]);
}

// Method pada array
// 1. join
var a = ['Albert', 'Alfa', 'Clementino'];
// console.log(a.join(', '))

// 2. push & pop
a.push('Duncan');
console.log(a.join(', '))

// 3. pop
