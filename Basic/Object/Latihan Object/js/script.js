function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {

    if (this.penumpang.includes(namaPenumpang)) {

      console.log(namaPenumpang + " sudah berada didalam angkot");

    } else {

      this.penumpang.push(namaPenumpang);

    }

    return this.penumpang;

  };

  this.penumpangTurun = function (namaPenumpang, bayar) {

    if (penumpang.length === 0) {
      
        alert("Angkot masih kosong!");
        return false;

    } else {
     
        if (this.penumpang.includes(namaPenumpang)) {

            if (bayar == 5000) {

                this.kas += bayar;
                console.log(namaPenumpang + " turun dari angkot dan membayar sebesar " + bayar);

            } else if (bayar > 5000) {
          
                kembali = bayar - 5000;
                this.kas += bayar - kembali;
                console.log(namaPenumpang +" turun dari angkot dan membayar sebesar " +bayar +" kembalian : " +kembali);

        } else {

          console.log("Uang anda tidak cukup");
          return false

        }

        this.penumpang.shift(namaPenumpang);

      } else {

        console.log(namaPenumpang + " tidak ada diangkot");
      
      }

      return this.penumpang;

    }

  }

}

var Republica = new Angkot("Asep", ["Weri", "Waibalun"], [], 0);

var Belavista = new Angkot("Slamet", ["Hokeng", "Waibalun"], [], 0);
