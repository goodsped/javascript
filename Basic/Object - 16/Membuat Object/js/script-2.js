var mhs = {

    nama : 'ALbert Kolin',
    nim : 'A11.2023.15193',
    fakultas : 'FIK',
    prodi : 'Teknik Informatika',
    umur : 20,
    ips : [3,21, 3,28, 3,30],
    hobbie : 'Bermain musik dan game',
    alamat : {
        jalan : 'Lrng. Tkk Anfrida',
        kelurahan : 'Sarotari Tengah',
        kecamatan : 'Larantuka',
        kabupaten : 'Flores Timur',
        provinsi : 'Nusa Tenggara Timur'
    }
};

function tampilObject(view){

    view  = mhs;

    for(let key in view){
        console.log(key + ": " + view[key]);
    }
    for(let arr in view.alamat){
        console.log(" \t" + arr + ": " + view.alamat[arr]);
    }
}


console.log(tampilObject());



