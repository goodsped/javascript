// DOM Selection
// document.getElementById() -> element

const judul = document.getElementById('judul');

judul.style.color = 'white' ;
judul.style.backgroundColor = 'black' ;
judul.innerHTML = 'Abe Kolin';

// document.getElementsByTagName() -> HTMLCollections

const li = document.getElementsByTagName('li');

li[0].style.backgroundColor = 'red' ;
li[1].style.backgroundColor = 'yellow' ;
li[2].style.backgroundColor = 'green' ;

// loop for

/*
for(let i = 0; i < li.length; i++){
    li[i].style.backgroundColor = 'red' ;
    }
    */
   
// document.getElementsByClassName() -> HTMLCollections
   
const p1 = document.getElementsByClassName('p1')[0];
p1.style.backgroundColor = 'coral' ;
   
