//1. Object Literal
let charSAO = {

    nama: 'Kirito',
    energi: 10,
    makan: function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Selamat makan ${this.nama}`)
    }

}
let charOnePiece = {

    nama: 'Zoro',
    energi: 10,
    makan: function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Selamat makan ${this.nama}`)
    }

}

console.log(charSAO.makan(5));
console.log(charSAO);

console.log(charOnePiece.makan(10));
console.log(charOnePiece);

//2. Function Declaration

// const methodMahasiswa = {

//     makan : function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//    main : function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     tidur: function(jam){
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur, mimpi indah`);
//     }
// };

// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;

//     return mahasiswa;

// }

// const albert = Mahasiswa('Albert', 50);
// const emen = Mahasiswa('Clementino', 10);

// 3. Constructor Function
function Game(player, nama, genre, suhu){

   this.player = player;
   this.nama = nama;
   this.genre = genre;
   this.suhu = suhu;

   this.main = function(jam){
        this.suhu += jam * 2;
        console.log(`Halo ${this.player}, selamat bermain!`);
    }

}

const rdr2 =  new Game('Albert','Red Dead Redemption 2', 'Open World', 60);

// 4. Prototype

// function Mahasiswa(nama, energi){

//    this.nama = nama;
//    this.energi = energi;

// }

// Mahasiswa.prototype.makan = function(porsi){
 
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam * 2;
//     return `Selamat tidur ${this.nama}, mimpi indah bosku.`;
// }

// let Albert = new Mahasiswa('Albert',12);

// console.log(Albert.tidur(1));

// versi class

class Mahasiswa{

    constructor(nama, energi){
        this.nama = nama;
        this.energy = energi;
    }

   makan = function(porsi){
 
            this.energi += porsi;
            return `Halo ${this.nama}, selamat makan!`;
        }
        
    tidur = function(jam){

            this.energi += jam * 2;
            return `Selamat tidur ${this.nama}, mimpi indah bosku.`;
        }

}

let Albert = new Mahasiswa('Abe', 5);


// Array
let angka = [1,2,3,5,4];

// Dari belakang
console.log(angka.reverse());

// Dari depan
console.log(angka.sort());

