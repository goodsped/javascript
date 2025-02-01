// filter
var angka = [8,2,3,4,5,10,1,6,9,7]
console.log('\n menampilkan array dgn filter');
var filter = angka.filter(function(x){
    return x > 5
});
console.log(filter.join(' - '));

// find
console.log('\n menampilkan array dgn find');
var find = angka.find(function(x){
    return x > 5;
});
console.log(find);
