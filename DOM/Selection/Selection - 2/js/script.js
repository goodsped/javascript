// document.querySelector() -> element

const p4 = document.querySelector('#b p')

p4.style.color = 'blue';

const li2 = document.querySelector('section#b ul li:nth-child(2)')

li2.style.backgroundColor = 'coral';
li2.style.color = 'white';

// akan diambil element pertama saja

const p = document.querySelector('p')

p.style.backgroundColor = 'coral';

const judul = document.querySelector('h1')

judul.innerHTML = 'DOM JavaScript';

// document.querySelectorAll() -> nodeList

const paraf = document.querySelectorAll('p');

paraf[1].style.backgroundColor = 'coral';

const sectionB = document.getElementById('b');

const paraf4 = sectionB.querySelector('p');

paraf4.style.backgroundColor = 'whitesmoke';


