alert("Hallo Albert!, silahkan masukan data angkot anda yang beroperasi");

do {
  var angkotBeroperasi = parseInt(prompt("Masukkan jumlah angkot yang beroperasi!"));
  var jumlahAngkot = 10;

  if (angkotBeroperasi <= jumlahAngkot && angkotBeroperasi >= 0) {
    for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
      console.log(
        `Angkot No. ${noAngkot} ${noAngkot <= angkotBeroperasi ? "beroperasi dengan baik" : "sedang tidak beroperasi"}.`
      );
    }
    alert(`Jumlah angkot yang tidak beroperasi adalah ${jumlahAngkot - angkotBeroperasi}`);
  } else {
    alert("Data yang Anda masukkan tidak valid!");
  }
} while (confirm("Masukkan data lagi?"));

alert("Terima kasih..");
