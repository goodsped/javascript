// DOM Traversal
const tutup = document.querySelectorAll('.close');

// for(let i = 0; i < tutup.length; i++){
//     tutup[i].addEventListener('click', function(e){
//         // tutup[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });

// };

tutup.forEach(function(el){

    el.addEventListener('click', function(e){
         e.target.parentElement.style.display = 'none'
    });

});

/* 

parentNode -> node
parentElement -> element
nextSibling -> node
nextElementSibling -> element
previousSibling -> node
previousElementSibling -> element

*/