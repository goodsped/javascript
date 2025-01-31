
var jmlAngkot = 10;
var angkotBeroprasi = prompt('masukan data angkot yang beroprasi')

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

    if(noAngkot <= angkotBeroprasi){
        if(noAngkot !== 5){
            console.log('Angkot No. '+noAngkot+' beroprasi dengan baik');
        }
        else if(noAngkot == 5){
            console.log('Angkot No. '+noAngkot+' sedang lembur.')
        }
    }else if((noAngkot == 8) || (noAngkot == 10) ){
        console.log('Angkot No. '+noAngkot+' sedang lembur');
    }else{
        console.log('Angkot No. '+noAngkot+' sedang tidak beroprasi.')
    }

}


