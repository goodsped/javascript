// filter, map & reduce


// filter memakai for
// mencari angka >= 3
const angka = [1,2,3,4,5,6,7,-3,-5];
const newAngka = [];
for(i = 0; i < angka.length; i++ ){
    if(angka[i] >= 3){
        newAngka.push(angka[i]);
    }
}
console.log(newAngka);

// filter
const angkaBaru = angka.filter(a => a >= 3);
console.log(angkaBaru)

// map
// kalikan semua angka dengan 2
const Angkanew = angka.map(a => a * 2);
console.log(Angkanew);

// reduce
// jumlahkan semua element pada array angka
const newArray = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5) 
console.log(newArray);

// Method Chaining
// Cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5) // 6, 7
.map(a => a * 3) // 18, 21
.map(a => a / 3) //6, 7
.reduce((acc ,cur) => acc + cur); //13
console.log(hasil);