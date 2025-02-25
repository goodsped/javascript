// const test = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 5000);
// });

// console.log(test);
// console.log('Hello World')
// test.then(() => console.log(test));

function cobaPromise(){
    return new Promise((resolve,reject) => {
        const waktu = 3000;
        if(waktu < 5000){
        setTimeout(() => {
            resolve('selesai')
        }, waktu);
    }else{
        reject('kelamaan!')
    }
    });
}

async function cobaAsync(){
    try{
        const coba  = await cobaPromise();
        console.log(coba);
    }catch(err){
        console.log(err);
    }
}
    
cobaAsync();
    
    // const coba = cobaPromise();
    // coba
    // .then(() => console.log(coba))
    // .catch(() => console.log(coba))