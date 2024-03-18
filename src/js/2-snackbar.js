import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const delayInput = form.elements['delay'];
  const stateRadio = form.elements['state'];

  const delay = delayInput.valueAsNumber;
  const state = stateRadio.value;

  if (!delay || delay <= 0) {
    showError('Please enter a valid delay and select a state');
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise.then(delay => {
    showSuccess(`✅ Fulfilled promise in ${delay}ms`);
  }).catch(delay => {
    showError(`❌ Rejected promise in ${delay}ms`);
  });
});

function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight'
  });
}

function showSuccess(message) {
  iziToast.success({
    title: 'Success',
    message: message,
    position: 'topRight'
  });
}