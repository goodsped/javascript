// $.ajax({
//     url:'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: movies => console.log(movies)
// });

// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
// .then(response => response.json())
// .then(response => console.log(response));

// Promise -> Objek yang merepresentasikan keberhasilan atau kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi atau ingkar)
// states (fulfilled) / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// // contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if( ditepati ){
//         resolve('janji telah ditepati!');
//     }else{
//         reject('ingkar janji..');
//     }
// });
// console.log(janji1);
// janji1
// .then(response => console.log('OK! : ' + response))
// .catch(response => console.log('ERROR! : ' + response));

// contoh 2
let janji = true;
const janji2 = new Promise((resolve, reject) => {
    if( janji ){
        setTimeout(() => {
            resolve('Ditepati setelah beberapa waktu!');
        }, 2000)
    }else{
        setTimeout(() => {
            resolve('Tidak tepati setelah beberapa waktu!');
        }, 2000)
    }
});
// console.log(janji2.then(() => console.log(janji2)));

console.log('mulai')
janji2
.finally(() => console.log('selesai menunggu!')) 
.then(response => console.log('OK! : ' + response))
.catch(response => console.log('NOT OK! : ' + response));
console.log('selesai')

// Promise.all()

const film = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            judu: 'Fight Club',
            directBy: 'David Fincher',
            actor: 'Edwar Norton, Brad Pitt'
        }])
    }, 1000);
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            temp: 26,
            kondisi: 'Cerah Berawan'
        }])
    },500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// menjalankan beberapa API sekaligus
Promise.all([film, cuaca])
.then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
});