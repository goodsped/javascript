const h1 = document.getElementsByTagName('h1')[0];
const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function(){

    document.body.classList.toggle('brown');
    h1.classList.toggle('white');

});

// btn random color
// membuat elemen baru
const btnRandomColor = document.createElement('button');
const teksBtn = document.createTextNode('Button Color');

// isi atribut dan teks dalam tag button yg sudah dibuat
btnRandomColor.appendChild(teksBtn);
btnRandomColor.setAttribute('type', 'button');

// simpan setelah button pertama
button.after(btnRandomColor);

// membuat function
btnRandomColor.addEventListener('click', function(){

    // menghasilkan angka random untuk warna
    let warna1 = Math.floor(Math.random() * 255 + 1) ;
    let warna2 = Math.floor(Math.random() * 255 + 1) ;
    let warna3 = Math.floor(Math.random() * 255 + 1) ;

    document.body.style.backgroundColor = 'rgb('+warna1+','+warna2+','+warna3+')';
    h1.style.color = 'white';

});

// menangkap elemen input dari html
const sMerah = document.querySelector('input[name=merah]');
const sHijau = document.querySelector('input[name=hijau]');
const sBiru = document.querySelector('input[name=biru]');

// pungsi ubah warna dari slider
sMerah.addEventListener('input',function(){

    const merah = sMerah.value; // untuk ambil value 
    const hijau = sHijau.value; // untuk ambil value 
    const biru = sBiru.value; // untuk ambil value 

    document.body.style.backgroundColor = 'rgb('+merah+','+hijau+','+biru+')';

})
sHijau.addEventListener('input',function(){

    const merah = sMerah.value; // untuk ambil value 
    const hijau = sHijau.value; // untuk ambil value 
    const biru = sBiru.value; // untuk ambil value 

    document.body.style.backgroundColor = 'rgb('+merah+','+hijau+','+biru+')';

})
sBiru.addEventListener('input',function(){

    const merah = sMerah.value; // untuk ambil value 
    const hijau = sHijau.value; // untuk ambil value 
    const biru = sBiru.value; // untuk ambil value 

    document.body.style.backgroundColor = 'rgb('+merah+','+hijau+','+biru+')';

})

document.body.addEventListener('mousemove',function(event){
    // posis mouse
    console.log(event.clientY);

    // ukuran browser
    // console.log(window.innerWidth);

    const xPos = Math.round((event.clientX/window.innerWidth) * 255);

    console.log(xPos);
    
    const yPos = Math.round((event.clientY/window.innerHeight) * 255);

    const biru = sBiru.value;

    console.log(yPos);

    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+','+biru+')';

});

