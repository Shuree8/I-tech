function timeToCatch(distance) {
    const speedWolf = 25; // Чононы хурд (км/ц)
    const speedRabbit = 18; // Туулайны хурд (км/ц)
    
    const relativeSpeed = speedWolf - speedRabbit; // Хурдны зөрүү
    const timeInHours = distance / relativeSpeed; // Цагийн тооцоо
    const timeInMinutes = timeInHours * 60; // Минутанд хувиргах
    const minutes = Math.floor(timeInMinutes);
    const seconds = Math.floor((timeInMinutes - minutes) * 60);
    
    return { minutes, seconds };
}

console.log(timeToCatch(10));