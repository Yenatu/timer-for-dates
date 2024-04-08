const targetDate = new Date("2024-11-27 02:00:00"); // Replace with your target date and time

const countdown = document.getElementById("countdown");
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const timeLeftText = document.getElementById("time-left");

const updateTimer = () => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysSpan.textContent = days.toString().padStart(2, "0");
    hoursSpan.textContent = hours.toString().padStart(2, "0");
    minutesSpan.textContent = minutes.toString().padStart(2, "0");
    secondsSpan.textContent = seconds.toString().padStart(2, "0");

    timeLeftText.textContent = `Time Left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  } else {
    countdown.textContent = "Time's Up!";
    clearInterval(intervalId);
  }
};

const intervalId = setInterval(updateTimer, 1000); // Update every second
