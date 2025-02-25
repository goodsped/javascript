// memecah isi dalam array atau object ke dalam variabel terpisah

const kastil = ['Winterfell', 'Casterly Rock', 'Dragonstone', 'Harrenhal'];

// const [w, c, d, h] = kastil;
// skip item
const [w, , d, h] = kastil;

console.log(w);
// console.log(c);
console.log(d);
console.log(h);

// menukar nilai variabel
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a,b)

// return value pada function
function coba(){
    return [1,2];
}

const [x,y]  = coba();
console.log(x,y);

// Rest parameter
const [angka, ...values] = [1,2,3,4,5];
console.log(a);
console.log(values) // masuk ke array

// Destructuring Object
const mhs = {
    nama: 'Abe Kolin',
    umur: 20,
    prodi: 'Teknik Informatika',
    hobi: 'Bermain Musik'
}

// const {nama, umur, prodi, hobi} = mhs;
// skip item 
const {nama, prodi, hobi} = mhs;

console.log(nama);
// console.log(umur);
console.log(prodi);
console.log(hobi);

// Assignment tanpa deklarasi object
 ({n, major, hobby} = {
    n: 'Abe Kolin',
    age: 20,
    major: 'Teknik Informatika',
    hobby: 'Bermain Musik'
});

console.log(n);

// Assignment ke variabel baru
const band = {
    nama: 'Led Zeppelin',
    asal: 'London, Inggris',
    genre: 'Hard Rock, Blues Rock'
}

const {nama: ma, asal: sal, genre: re } = band;

console.log(ma);

// Memberikan default value
const bands = {
    nama: 'The Beatles',
    asal: 'Liverpool, Inggris',
    // genre: 'Rock'
}

const {nama: nam, asal: as, genre: gen = 'Rock n Roll' } = bands;

console.log(gen);

// Rest parameter
const group = {
    nama: 'The Beatles',
    asal: 'Liverpool, Inggris',
    genre: 'Rock n Roll'
}

const {nama: name, ...value } = group;

console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const musisi = {
    id:'38',
    nama: 'Bryan Harold May',
    tanggal_lahir: '19 Juli 1947',
    asal: 'London, Inggris',
    band: 'Queen',
    pendidikan: 'PhD dalam Astrofisika dari Imperial College London',
    lagu: 'We Will Rock You'
}   

function getMusisi({id, nama, band}){
    return band;
}

console.log(getMusisi(musisi));









