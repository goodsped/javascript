// Membuat Object
// Object Literal
var mhs = {
    nama : 'Albert Kolin',
    nim : 'A11.2023.15193',
    email : 'albertog4taz28@gmail.com',
    jurusan : 'Teknik Informatika'
}

var mhs2 = {
    nama : 'Clementino Kolin',
    nim : 'A11.2020.15193',
    email : 'clementinokolin@gmail.com',
    jurusan : 'Sastra Inggris'

}

// Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan){

    var mhs = {}
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email
    mhs.jurusan = jurusan;

    return mhs;

}

var mhs3 = buatObjectMahasiswa('Aldino', 'E11.2018.12189', 'adit@gmail.com', 'Teknik Industri');

// Constructor
function Mahasiswa(nama, nim, email, jurusan){

    // var this = {};
    this.nama =  nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;

    // return this;

}

var mhs4 = new Mahasiswa('Alfario Kolin','E11.2010.10189', 'alfa@gmail.com', 'Teknik Industri');
