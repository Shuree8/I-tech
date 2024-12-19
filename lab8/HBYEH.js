function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findGCD(numbers) {
    return numbers.reduce((a, b) => gcd(a, b));
}

console.log(findGCD([12, 15, 18, 30, 45]));