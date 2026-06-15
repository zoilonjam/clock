const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

function updateClock() {

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

   
    const secondDegrees = seconds * 6;
    const minuteDegrees = minutes * 6 + seconds * 0.1;
    const hourDegrees = (hours % 12) * 30 + minutes * 0.5;

    secondHand.style.transform =
        `translateX(-50%) rotate(${secondDegrees}deg)`;

    minHand.style.transform =
        `translateX(-50%) rotate(${minuteDegrees}deg)`;

    hourHand.style.transform =
        `translateX(-50%) rotate(${hourDegrees}deg)`;

    // Digital Clock
    timeElement.textContent =
        now.toLocaleTimeString();

    dateElement.textContent =
        now.toDateString();
}

updateClock();
setInterval(updateClock, 1000);