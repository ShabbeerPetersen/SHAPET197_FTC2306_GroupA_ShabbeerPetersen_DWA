const MAX_NUMBER = 15
const MIN_NUMBER = -5
const STEP_AMOUNT = 5;

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]');

// subtractHandler newValue
// addHandler newValue

const subtractHandler = () => {
    const newValue = parseInt(number.textContent) - STEP_AMOUNT;
    number.textContent = newValue;
    if (add.disabled === true) {
        add.disabled = false
    }

    if (newValue <= MIN_NUMBER) {
      subtract.disabled = true;
    }
}
    
const addHandler = () => {
    const newValue = parseInt(number.textContent) + STEP_AMOUNT;
    number.textContent = newValue;
    if (add.disabled <= MAX_NUMBER) {
      subtract.disabled = false;
    }

    if (newValue >= MAX_NUMBER) {
        add.disabled = true
    }
}

subtract.addEventListener('click', subtractHandler)

add.addEventListener('click', addHandler);