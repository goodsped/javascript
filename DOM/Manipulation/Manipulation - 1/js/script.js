// DOM Manipulation
// Manipulasi element dan node 
// node (menambah atau menghapus element)

// innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = 'React JS';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'JS DOM';

// style
const p1 = document.querySelector('.p1');
p1.style.backgroundColor  = 'lightblue';

const p2 = document.querySelector('.p2');
p2.style.backgroundColor  = 'lightblue';

// attribute
const baru = document.getElementsByTagName('h1')[0];

// menambahkan attribute
baru.setAttribute('name', 'Albert');

//mengetahui value attribute
baru.getAttribute('name'); 
judul.getAttribute('id');

// menghilangkan attribute
baru.removeAttribute('name'); 


// class
// menambahkan class
p2.classList.add('label')

// toggle
// document.body.classList.toggle('biru-muda');
// document.body.classList.toggle('biru-muda');

// studi kasus dengan tombol
function tombolKlik(){
    document.body.classList.toggle('biru-muda');
}

// item
p2.classList.item(1) //mengetahui ada berapa kelas
p2.classList.contains('label') // mengecek ada kelas dengan nama ini gak?

// replace -> mengganti class
p2.classList.replace('label', 'labels')



