import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const itemSelector = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(itemSelector, options);

let userSelectedDate = options.onClose(selectedDates[0]);

const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', () => {
  const initTime = Date.now();

  setInterval(() => {
    const currentTime = Date.now();
    const diff = currentTime - initTime;

    console.log(diff);
  }, 1000);
});
