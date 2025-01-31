// menggunakan tanda "" jika teks mengandung tanda ''
console.log(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus animi adipisci similique dolorem, 'Valar Morghulis' sapiente ipsum repudiandae! Repellat delectus doloribus cumque rerum dignissimos voluptas, est culpa iure, dolorem inventore blanditiis.");

// menggunakan tanda '' jika teks mengandung tanda ""
console.log(' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus animi adipisci similique dolorem, "Valar Morghulis" sapiente ipsum repudiandae! Repellat delectus doloribus cumque rerum dignissimos voluptas, est culpa iure, dolorem inventore blanditiis.');

// menggunakan escape character
console.log(' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus animi adipisci similique dolorem, \'Valar Morghulis\' sapiente ipsum repudiandae! Repellat delectus doloribus cumque rerum dignissimos voluptas, est culpa iure, dolorem inventore blanditiis.');

// menggunakan escape character
console.log(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum possimus animi adipisci similique dolorem, \"Valar Morghulis\" sapiente ipsum repudiandae! Repellat delectus doloribus cumque rerum dignissimos voluptas, est culpa iure, dolorem inventore blanditiis.");

 /*

\0 = karakter NULL
\' = '
\" = "
\\ = \
\n = new line/baris baru
\t = tab
\b = backspace
uXXXX = unicode 
        {
            \u00A9
            \u00AE
            \u00B1
            \u00B5
            \u2122
        }
 */

console.log('Ini adalah hari Jum\'at');
console.log('Ini adalah \n hari Jum\'at');
console.log('Ini adalah \t hari Jum\'at');
console.log('Ini adalah \u00A9');
console.log('Ini adalah  \u00AE');
console.log('Ini adalah  \u00B1');
console.log('Ini adalah  \u00B5');
console.log('Ini adalah  \u2122');

// concatenation
var a, b, c, d;
 a = "albert";
 b = "suka";
 c = "bermain";
 d = "gitar";
 console.log(a + " " + b + " " + c + " " + d);
 
 //  perbandingan
 // true
 console.log(("albert" == "albert"));
 // false
 console.log(("Albert" == "albert"));
 
 // .length untuk menghitung panjang string
 console.log(("Albert".length));

 // Menghitung total panjang semua string mencakup spasi
let totalLength = a.length + b.length + c.length + d.length;

console.log("Total panjang semua string: " + totalLength);



