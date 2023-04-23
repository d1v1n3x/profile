function clock() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

secondHand.style.backgroundColor = "#F2FAF6"; 
minuteHand.style.backgroundColor = "#E8F5EB"; 
hourHand.style.backgroundColor = "#C1E2D7"; 

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(clock, 1000);
