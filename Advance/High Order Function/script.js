//  High Order Function
function kerjakanTugas(matkul, selesai){
    console.log(`Mulai mengerjakan tugas ${matkul}...`);
    setTimeout(function(){
        selesai(matkul); // -> callback
    }, 2000);
};

function selesai(matkul){
    console.log(`Selesai mengerjakan tugas ${matkul}`);
}

// High Order Function Loop
kerjakanTugas('Pemrograman Berbasis Web.', selesai);

function repeat(n, action){
    for(i = 0; i < n; i++ ){
        action(i);
    }
}

repeat(3, console.log);