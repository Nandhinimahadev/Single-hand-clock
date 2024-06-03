
function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const totalMinutes = hours * 60 + minutes + seconds / 60;
    const degrees = (totalMinutes / 720) * 360; // 720 minutes in 12 hours

    document.querySelector('.face').style.transform = `rotate(-${degrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock();