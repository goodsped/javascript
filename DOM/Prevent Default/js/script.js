// DOM Prevent Default
const tutup = document.querySelectorAll('.close');

tutup.forEach(function(el){

    el.addEventListener('click', function(e){
         e.target.parentElement.style.display = 'none';
         e.preventDefault(); // untuk menghentikan aksi default
    });

});