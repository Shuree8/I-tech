

function isPalindrome(too) {
    const tsiprNiilber = too.toString().split('').map(Number).reduce((a, b) => a + b, 0); 
    const sumString = tsiprNiilber.toString();
    const palindrome = sumString.split('').reverse().join(''); 


    if (sumString === palindrome) {
        console.log(`${too} тооны цифрүүдийн нийлбэр (${tsiprNiilber}) нь палиндром мөн.`);
    } else {
        console.log(`${too} тооны цифрүүдийн нийлбэр (${tsiprNiilber}) нь палиндром биш.`);
    }
}
console.log(isPalindrome(124112)); 