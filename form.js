const inputs = document.querySelectorAll('input');
const btn = document.querySelector('#generate');
const SSNOut = document.querySelectorAll('.ssn h6');
const h6Array = [...document.querySelectorAll('.ssn h6')];

function checkValidity() {
    const allValid = [...inputs].every((input) => input.checkValidity());
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
  const allValid = [...inputs].every((input) => input.checkValidity());
  if (allValid && h6Array.length >= 9) {
    for (let i = 0; i < 9; i++) {
      setTimeout(() => {
        const RN = Math.floor(Math.random() * 10); //put RN and assign array within the timeout
        if (h6Array[i]) {
          h6Array[i].innerText = RN; //check if array value exists before assigning value
          h6Array[i].classList.add('ssn-ease-in');
        }
      }, i * 200);
    }
  }
}

inputs.forEach((input) => {
    input.addEventListener('input', checkValidity);
})
btn.addEventListener('click', generateSSN);