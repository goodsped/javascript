// Function Expression
let tampilPesan1 = function (nama, umur) {
  console.log(`Halo nama saya ${nama}, umur saya ${umur} tahun.`);
};
tampilPesan1("Clementino", 28);

// Arrow Function dgn implisit return
let tampilPesan2 = (nama, umur) => console.log(`Halo nama saya ${nama}, umur saya ${umur} tahun.`);

tampilPesan2("Albert", 20);

// Arrow Function dgn 1 parameter
let tampilPesan3 = nama => console.log(`Halo nama saya ${nama}.`);

tampilPesan3("Albert");

// Arrow Function tanpa parameter
let tampilPesan4 = () => 'Hello World!';
console.log(tampilPesan4());

// Mengetahui panjang dari masing" elemen array
let mahasiswa = ['Abe', 'Aldino', 'Pures'];

let jmlHuruf = mahasiswa.map(function(nama){
    return nama.length;
});
console.log(jmlHuruf);

//  Mengetahui panjang dari masing" elemen array dengan Arrow Function
let kolin = ['Albert', 'Alfa', 'Clementino'];
let jumlahHuruf = kolin.map((nama) => nama.length);

console.log(jumlahHuruf);

// return dalam bentuk object
let jmlHrf = kolin.map((nama) => ({
    nama,
    jumlahHuruf : nama.length
}));
// console.table mengubah ouput dalam bentuk tabel
console.table(jmlHrf);


