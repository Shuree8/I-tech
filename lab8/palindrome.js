

function isPalindrome(too) {
    const tsiprNiilber = too.toString().split('').map(Number).reduce((a, b) => a + b, 0); // Цифрүүдийн нийлбэр
    const sumString = tsiprNiilber.toString();
    const palindrome = sumString.split('').reverse().join(''); 


    if (sumString === palindrome) {
        console.log(`${too} тооны цифрүүдийн нийлбэр (${tsifrNiilber}) нь палиндром мөн.`);
    } else {
        console.log(`${too} тооны цифрүүдийн нийлбэр (${tsifrNiilber}) нь палиндром биш.`);
    }
}
console.log(isPalindrome(1232)); 