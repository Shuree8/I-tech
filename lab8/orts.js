
function tootOloh (haalganiToo){
    const dawhar = 9;
    const dawhariinAil = 4;
    const orts = 3;

    const  dawhariinToo = Math.floor((haalganiToo-1)/(dawhariinAil * orts))+1;
    const  ortsniiToo = Math.floor((haalganiToo-1)/dawhariinAil)% orts + 1;
    const  haalganiiToot = (haalganiToo-1)%dawhariinAil+1;


    return `Орц ${ortsniiToo}, давхар ${dawhariinToo} хаалга ${haalganiiToot}`;

}
console.log(tootOloh(0));