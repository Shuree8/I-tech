function squareAndRoot(number) {
    const square = Math.pow(number, 2); // 2-р зэрэг
    const root = Math.sqrt(number); // Язгуур
    return { square, root };
}

console.log(squareAndRoot(16));