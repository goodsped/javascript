var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    let ganti = JSON.parse(sessionStorage.getItem('turun'));
    if(penumpang.length == 0){
        penumpang.push(namaPenumpang);
    }else{
        if(penumpang.includes(namaPenumpang)){
            console.log(namaPenumpang+ ' sudah ada di buz');}
        else if(ganti !== -1){
             penumpang.splice(ganti,0,namaPenumpang);
             sessionStorage.clear();
        }
        else if(penumpang !== undefined){
            penumpang.push(namaPenumpang);
        }
    }
    console.log('Penumpang : '+penumpang.join(' - ')), console.log(penumpang)
}
var hapusPenumpang = function(namaPenumpang, penumpang){
    console.log(namaPenumpang+' turun dari buz') 
    var turun = penumpang.indexOf(namaPenumpang);
    sessionStorage.setItem('turun', JSON.stringify(turun))
    penumpang.splice(turun,1);
    return console.log('Kursi no '+(turun+1)+' kosong'), console.log(penumpang);
}

var ubahPenumpang = function(namaPenumpang, penumpang){
    console.log(namaPenumpang+' turun dari buz') 
    var turun = penumpang.indexOf(namaPenumpang);
    sessionStorage.setItem('turun', JSON.stringify(turun))
    penumpang.splice(turun,1);
    return console.log('Kursi no '+(turun+1)+' kosong'), console.log(penumpang);
}

tambahPenumpang('Alfa', penumpang);
tambahPenumpang('Abe', penumpang);
tambahPenumpang('Emen', penumpang);

// hapus
hapusPenumpang('Emen', penumpang);

// tambah
tambahPenumpang('Aldino', penumpang);