// Tagged Templates

const game = 'Red Dead Redemption';
let seri = 2;
let dev = 'Rockstar'

function tampil(strings, ...values){
    let hasil = '';
    strings.forEach((str, i) => {
        hasil += `${str}${values[i] || '' }`
    });
    return hasil;
}
function cetak(strings, ...values){

    return strings.reduce((hasil, str, i) => `${hasil}${str}<span class="test">${values[i] || ''}</span>`, '');
}

const str = cetak`${game} ${seri} adalah game terbaik dari ${dev} sepanjang masa.`;

// console.table(str);
// console.log(str);

document.body.innerHTML = str;

