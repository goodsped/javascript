// Spread Operator
// memecah iterables menjadi single element

const mhs1 = ['Abe', 'Kolin', 'Gabriel'];
console.log(...mhs1[0]);

// menggabungkan dua array
const mhs2 = ['Abe', 'Kolin', 'Gabriel'];
const dosen = ['Ifan', 'Heru', 'Chaerul'];
const orang = [...mhs2, 'Bagus', ...dosen];

//menggunakan concat
// const orang = mhs2.concat(dosen);
console.log(orang);

// meng-copy array
const mhs3 = ['Abe', 'Kolin', 'Gabriel'];
// const Mhs = mhs3;
const Mhs = [...mhs3];
Mhs[1] = 'Arthur';
console.log(Mhs);

const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for(let i = 0; i < liMhs.length; i++){
//     mhs.push(liMhs[i].textContent);
// }   
// console.log(mhs);

// dengan map
const mhs = [...liMhs].map(m => m.textContent);
console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
console.log(huruf);
nama.innerHTML = huruf;
