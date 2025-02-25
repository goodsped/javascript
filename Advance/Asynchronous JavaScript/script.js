/*
- Callback
- Promise
- ajax
- Async & Await
*/

// Callback

// Synchronous Callback
// function halo(nama){
//     alert(`Halo, ${nama}`);
// }

// function tampilPesan(callback){
//     const nama = prompt('Masukan Nama : ');
//     callback(nama)
// }
// tampilPesan(nama => {
//     alert(`Halo, ${nama}`)
// });

// Asynchronous Callback
// function getDataMahasiswa(url, succes, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         succes(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }
// getDataMahasiswa(
//   "mhs.json",
//   (result) => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
//   },
//   () => {
//     console.log("Error: File tidak ditemukan");
//   }
// );

// JQuery
console.log('mulai');

$.ajax({
    url: 'mhs.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama))
    },
    error: () => {
        console.log("Error: File tidak ditemukan");
    }
});

console.log('selesai');

