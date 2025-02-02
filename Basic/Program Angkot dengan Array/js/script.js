var penumpang = [];

var tambahPenumpang = function(namaPenumpang) {
    let ganti = JSON.parse(sessionStorage.getItem('turun'));

    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
    } else {
        if (penumpang.includes(namaPenumpang)) {
            console.log(namaPenumpang + ' sudah ada di buz');
        } else if (typeof ganti === 'number' && ganti !== -1) {
            penumpang.splice(ganti, 0, namaPenumpang);
            sessionStorage.removeItem('turun');
        } else {
            penumpang.push(namaPenumpang);
        }
    }

    console.log('Penumpang: ' + penumpang.join(' - '));
    console.log(penumpang);
};

var hapusPenumpang = function(namaPenumpang) {
    console.log(namaPenumpang + ' turun dari buz');
    var turun = penumpang.indexOf(namaPenumpang);

    if (turun !== -1) {
        sessionStorage.setItem('turun', JSON.stringify(turun));
        penumpang.splice(turun, 1);
        console.log('Kursi no ' + (turun + 1) + ' kosong');
    } else {
        console.log(namaPenumpang + ' tidak ditemukan dalam buz');
    }

    console.log(penumpang);
};

// Uji coba kode
tambahPenumpang('Alfa');
tambahPenumpang('Emen');
tambahPenumpang('Abe');

// // Hapus
hapusPenumpang('Emen');
hapusPenumpang('Alfa');
// hapusPenumpang('Abe');

// Tambah kembali ke posisi yang kosong
tambahPenumpang('Aldino');
// tambahPenumpang('Alfa');
tambahPenumpang('Emen');
// tambahPenumpang('Abe');
