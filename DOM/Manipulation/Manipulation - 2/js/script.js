// DOM Manipulation
// Manipulasi element dan node 
// node (menambah atau menghapus element)


// membuat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('paragraf baru');

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section a
const sectionA = document.querySelector('#a');
sectionA.appendChild(pBaru);


// insertBefore
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('li baru');

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// menghapus 
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link)

// replace
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

// membuat elemen baru
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('React JS');

// simpan tulisan ke dalam h2
h2Baru.appendChild(teksH2Baru);

// menggantikan elemen p4 dengan h2 baru
sectionB.replaceChild(h2Baru, p4);

// tanda elemen baru
pBaru.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'
h2Baru.style.backgroundColor = 'lightgreen'

