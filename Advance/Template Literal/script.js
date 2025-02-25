// Menggunakan `` back tick

// Multi-line String -> langsung enter
console.log(`string 1 
string 2`);

// Embeded Expression
const nama = 'Albert'
let hobi = 'bermain musik';
console.log(`Hi nama saya ${nama}, hobi saya ${hobi}.`);
function luasPersegiPanjang(p, l){

    let hasil = p * l;
    return hasil
    
}
console.log(`Luas Persegi Panjang adalah ${luasPersegiPanjang(3,9)}`);

const lp = luasPersegiPanjang(3,9);
console.log(`${lp % 2 == 0 ? 'genap' : 'ganjil'}`);

// Expression Interpolation
let a = 20;
let b = 8;
console.log(`Jika a = ${a}, dan b = ${b} maka penjumlahannya adalah ${a + b}.`);

// HTML Fragments
const mhs = {
    nama: 'Abe',
    umur: '20',
    nim: 'A11.2023.15193',
    email: 'abekolin@outlook.com'
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nim">${mhs.nim}</span>
</div>`;

console.log(el);


