// Konsep this pada Arrow Function

// Constructor Function
const Mahasiswa = function () {
  (this.nama = "Abe"), (this.umur = 20);
  this.sayHello = function () {
    console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  };
};
const Abe = new Mahasiswa();
Abe.sayHello();

// Arrow Function -> Constructor tidak bisa diubah menjadi arrow function tetapi method bisa
const Mhs = function () {
  (this.nama = "Alexa"), (this.umur = 20);
  // method
  this.sayHello = () =>
    console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
};
const Alexa = new Mhs();
Alexa.sayHello();

// Object Literal Arrow Function undefined karna tidak ada this
let mhs1 = {
  nama: "Abe Kolin",
  umur: 20,
  sayHello: () => {
    console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
  },
};
mhs1.sayHello();

const Mhs2 = function () {
  (this.nama = "Frank"), (this.umur = 20);
  // method
  this.sayHello = () =>
    console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur} tahun.`);

  // setInterval(() => {
  //     console.log(this.umur++);
  // },500);
};
const Frank = new Mhs2();
Frank.sayHello();

// DOM dengan arrow function
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle("size"); //this = const box
  setTimeout(() => {
    this.classList.toggle("caption");
  }, 600);
});
