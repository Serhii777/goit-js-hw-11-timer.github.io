let end_date = {
  full_year: "2020", // Год
  month: "07", // Номер месяца
  day: "10", // День
  hours: "18", // Час
  minutes: "30", // Минуты
  seconds: "10", // Секунды
};

const refs = {
  timerRef: document.querySelector("#timer-1"),
  daysRef: document.querySelector('span[data-value="days"]'),
  hoursRef: document.querySelector('span[data-value="hours"]'),
  minuteslRef: document.querySelector('span[data-value="mins"]'),
  secondsRef: document.querySelector('span[data-value="secs"]'),
};

const timer = setInterval(function () {
  let currentTime = new Date().getTime();
  const endDate = new Date(
    `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`
  ).getTime();

  let time = endDate - currentTime;

  if (time >= 0) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    refs.daysRef.textContent = days;
    refs.hoursRef.textContent = ("0" + hours).slice(-2);
    refs.minuteslRef.textContent = ("0" + mins).slice(-2);
    refs.secondsRef.textContent = ("0" + secs).slice(-2);
  } else {
    refs.timerRef.classList.add("js-timer");
    refs.timerRef.textContent = "Обратный отсчет окончен!";
  }
}, 1000);
