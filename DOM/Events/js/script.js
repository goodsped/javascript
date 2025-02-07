// const p3 = document.querySelector('.p3');

// function ubahWarna(){
//     p3.style.backgroundColor = 'coral';
// }

// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// const sectionB = document.getElementById('b');
// const ul = sectionB.querySelector('ul');
// const li3 = sectionB.querySelector('li:nth-child(3)');
// const p4 = sectionB.querySelector('p');
// p4.addEventListener('click', function(){

//     alert('Mantap');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');
    
//     liBaru.appendChild(teksLiBaru);

//     ul.insertBefore(liBaru, li3);


// });

const p3 = document.querySelector('.p3');

// dengan EventHandler
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function(){
//     p3.style.color = 'red';
// }

// dengan EvenListener
p3.addEventListener('click', function(){
    p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('click', function(){
    p3.style.color = 'white';
});

/* 
Daftar Event

Mouse Event
Keyboard Event
Resources Event
Focus Event
View Event
Form Event
CSS Animations & Transition Event
Drag & Drop Event
*/