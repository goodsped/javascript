// HTML Fragments
const mhs = [
  {
    nama: "Abe",
    umur: "20",
    nim: "A11.2023.15193",
    email: "abekolin@outlook.com",
  },
  {
    nama: "Aldino",
    umur: "21",
    nim: "A11.2023.15194",
    email: "aldino@outlook.com",
  },
  {
    nama: "Pures",
    umur: "20",
    nim: "A11.2023.15195",
    email: "pures@outlook.com",
  },
];

const el = `<div class="mhs">
${mhs.map(m => `<ul>
    <li>Nama : ${m.nama}</li>
    <li>Umur : ${m.umur}</li>
    <li>NIM : ${m.nim}</li>
    <li>Email : ${m.email}</li>
    </ul>`).join('')}
</div>`;

const lagu = [

{
    judul: 'another awake with you on my mind.',
    penyanyi: 'eleventwelfth',
    feat: 'Adeliesa'
},
{
    judul: 'Gelora',
    penyanyi: 'The Panturas',
    feat: 'Feast.'
},
{
    judul: 'Sunshine',
    penyanyi: 'The Panturas',
},

];

const el2 = `<div class="lagu">
<h2>Songs</h2>
${lagu.map(l =>
  `<ul>
  <li>Judul: ${l.judul}</li>
  <li>Penyanyi: ${l.penyanyi}${l.feat ? `, ${l.feat}` : ``}</li>
  </ul>`
).join(``)}
</div>`;

document.body.innerHTML = el2;

// Nested 
const mahasiswa = {
    nama: 'Albert',
    semester: 4,
    mataKuliah: ['Machine Learning', 'PBO', 'Jarkom', 'Otomata']
};

// Fungsi untuk mencetak daftar mata kuliah dalam format <li>
function cetakMatkul(matkul) {
    return matkul.map(mk => `<li>${mk}</li>`).join('');
}
const el3 = `<div class="mhs">
    <ul>
        <li>Nama: ${mahasiswa.nama}</li>
        <li>Semester: ${mahasiswa.semester}</li>
        <li>Mata Kuliah:
            <ul>
                ${cetakMatkul(mahasiswa.mataKuliah)}
            </ul>
        </li>
    </ul>
</div>`;

// Menampilkan ke dalam body
// document.body.innerHTML = el3;
