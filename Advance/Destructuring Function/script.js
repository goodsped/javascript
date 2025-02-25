// Destructuring Function

// function penjumlahanPerkalian(a,b){
//     return [a + b, a * b];
// } 
// const [tambah, kali] = penjumlahanPerkalian(2,3);
// console.log(tambah);
// console.log(kali);

// Example
function kalkulasi(a,b){
    return [a + b, a - b, a * b, /*a / b*/];
} 
const [ta, ku, kal, bag = 'none'] = kalkulasi(24,8);
console.log(ta);
console.log(ku);
console.log(kal);
console.log(bag);

// Example 
function kalkulasi_2(a,b){
    return {
        tambah: a + b, 
        kurang: a - b, 
        kali: a * b, 
        bagi: a / b
        };
} 
const {bagi, kurang, kali, tambah} = kalkulasi_2(24,8);
console.log(bagi);
console.log(kurang);
console.log(kali);
console.log(tambah);

// Destructur function arguments
const mhs1 = {
    nama: 'Albert',
    umur: 20,
    email: 'abekolin@outlook.com',
    nilai: {
        tugas: 85,
        uts: 90,
        uas: 80
    }
}

// function cetakMhs(mhs){
//     return `Hi nama saya ${mhs.nama}, saya berusia ${mhs.umur}.`;
// }

// const mahasiswa = cetakMhs(mhs1);
// console.log(mahasiswa);

function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}){
    return `Hi nama saya ${nama}, saya berusia ${umur}. Niali UAS saya ${uas}, dan UTS ${uts}.`;
}

const mahasiswa = cetakMhs(mhs1);
console.log(mahasiswa);