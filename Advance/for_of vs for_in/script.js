// for..of & for..in

const mhs = ['Abe', 'Aldino', 'Pures'];

// for biasa
console.log('\n')
for(let i = 0; i < mhs.length; i++){
    console.log(mhs[i]);
}

// foreach
console.log('\n')
mhs.forEach(m => console.log(m))

// for..of
console.log('\n')
for(const m of mhs){
    console.log(m);
}

// forof lopping string
console.log('\n');
const nama = 'Albert';
for(const n of nama){
    console.log(n);
}
for(const [i,m] of mhs.entries()){
    console.log(`${m} adalah mahasiswa ke-${i + 1}`)
}

// foreach example
console.log('\n')
mhs.forEach((m, i) => {
    console.log(`${m} adalah mahasiswa ke-${i + 1}`)
});

// NodeList
// const liNama = document.querySelectorAll('.nama');
// // liNama.forEach(n => console.log(n.innerHTML));
// for (n of liNama){
//     console.log(n.innerHTML);
// }

// arguments
function jumlahAngka(){
    // return [1,2,3,4,5].reduce((a, i) => a + i);
    let jumlah = 0;
    for (a of arguments){
        jumlah += a;
    }
    return jumlah;
}
console.log(jumlahAngka(1,2,3,4,5));

// for..in
const orang = {
    nama: 'Abe',
    hobi: 'Bermain musik',
    email: 'abekolin@outlook.com'
}
for(m in orang){
    console.log(orang[m]);
}




