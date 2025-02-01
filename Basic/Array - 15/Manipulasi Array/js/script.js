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

// 2. push
a.push('Duncan', 'Ned');
console.log(a.join(', '))

// 3. pop
a.pop();
a.pop();
console.log(a.join(', '))

// 4. unshift
a.unshift('Ned');
console.log(a.join(', '))

// 5. shift
a.shift('Ned');
console.log(a.join(', '))


// 6. splice
// splice(indexAwal;, mauDihapusBerapa, elemenBaru1, elemenBaru2, dst..)
a.splice(0,3,'Ned','Arya', 'Brandon', 'Jhon', 'Rob');
console.log(a.join(', '))

// 7. slice
// slice(awal, akhir)
var arr2 = a.slice(0,4);
console.log(arr2.join(', '));

var a = ['Alfa', 'Clementino', 'Albert'];
console.log(a.join(', '));


