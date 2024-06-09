
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    console.log("now",now)

    const degrees = ((hours % 12) + minutes / 60) * 30+60;
    console.log("degrees",degrees)
    const clock = document.querySelector('.numbers');
    clock.style.transform = `rotate(-${degrees}deg)`; 
  }
  
  setInterval(updateClock, 1000);
  updateClock();
