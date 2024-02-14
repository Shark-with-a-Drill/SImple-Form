const input = document.querySelectorAll('input');
const inputs = [...input];
const errors = [...document.querySelectorAll('.error')];
const btn = document.querySelector('#generate');
const SSNOut = document.querySelectorAll('.ssn h6');
const h6Array = [...document.querySelectorAll('.ssn h6')];
const fName = document.querySelector('#f-name');
const lName = document.querySelector('#l-name');
const DOB = document.querySelector('#DOB');
const streetAddress = document.querySelector('#s-address');
const city = document.querySelector('#city');
const zipcode = document.querySelector('#zip');
const card = document.querySelector('#card-number');
const exp = document.querySelector('#expiration');

function checkValidity() {
    const allValid = inputs.every((input) => input.checkValidity());
    if (allValid) {
        btn.classList.add('valid-button');
        btn.classList.remove('invalid-button');
    }
    else {
        btn.classList.remove('valid-button');
        btn.classList.add('invalid-button');
    }
}

function generateSSN() {
  const allValid = inputs.every((input) => input.checkValidity());
  if (allValid && h6Array.length >= 9) {
    for (let i = 0; i < 9; i++) {
      setTimeout(() => {
        const RN = Math.floor(Math.random() * 10); //put RN and assign array within the timeout
        if (h6Array[i]) {
          h6Array[i].innerText = RN; //check if array value exists before assigning value
          h6Array[i].classList.add('ssn-ease-in');
        }
      }, i * 200); //async execution where values are ready when generate button is pressed, but are deployed every 200ms from the stack every loop iteration via setTimeout
    }
  }
}

input.forEach((input) => {
    input.addEventListener('input', checkValidity);
});
inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (!input.checkValidity()) {
      errors[index].innerText = 'Invalid input'; //forEach gets index from array it iterates over and it's content for that index (input) and both input and index can be used within the function
    } else {
      errors[index].innerText = '';
    }
  });
});
btn.addEventListener('click', generateSSN);

