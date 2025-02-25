// Rest Parameter

function myFunc(...myArgs){
    return myArgs;
}
const arr = myFunc(1,2,3,4,5);
console.log(arr);

// Example for
function jumlah(...arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}
const arrJum = jumlah(1,2,3,4,5);
console.log(arrJum);

// Example for..of
function jumlahkan(...arr){
    let total = 0;
    for(const a of arr){
        total += a;
    }
    return total;
}
const jumArr = jumlahkan(1,2,3,4,5);
console.log(jumArr);

// Example high order function
function jml(...arr){
    return arr.reduce((a, b) => a + b)
}
const jum = jml(1,2,3,4,5);
console.log(jum);

// Example array destruct
const kelompok1 = ['Alberto', 'Doddy', 'Erik', 'Fajar', 'Hendra' ];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);

// Example object destruct
const team = {
    pm: 'Gandalf',
    frontEnd1: 'Abe',
    frontEnd1: 'Jhon Doe',
    backEnd: 'Abe',
    ux: 'Hendra',
    devOps: 'Aken'
}
const {pm, ...myteam} = team;
console.log(myteam);

// Example filtering
function filteringBy(type, ...values){
    return values.filter(v => typeof v === type);
}
const check = filteringBy('number', 1, 'Hujan', 'Kering', false, 'Basah', true, 11);
console.log(check);