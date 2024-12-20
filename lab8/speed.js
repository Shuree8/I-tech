


const chono = 25 ;
const tuulai = 18 ;
var n ;
n = window.prompt("Chono tuulai 2n hoorondoh zai (km)");

const hurdZoruu = chono - tuulai ;
const guitsehTime = n / hurdZoruu;

const guitsehMinut = Math.floor(guitsehTime*60);
const guitsehSecund = Math.round((guitsehTime*3600)%60);
 
document.write(guitsehMinut +"минут" +" "+ guitsehSecund + "секундын дараа гүйцнэ.")
