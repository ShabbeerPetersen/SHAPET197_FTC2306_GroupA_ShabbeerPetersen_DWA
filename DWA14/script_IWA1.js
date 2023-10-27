document.addEventListener("DOMContentLoaded", () => {
  const number = document.querySelector('[data-key="number"]');
  const add = document.querySelector('[data-key="add"]');
  const subtract = document.querySelector('[data-key="subtract"]');
  const reset = document.querySelector('[data-key="reset"]');

  // Add an event listener for the "Add" button.
  add.addEventListener("click", () => {
    const currentValue = parseInt(number.value);
    number.value = currentValue + 1;
  });

  // Add an event listener for the "Subtract" button.
  subtract.addEventListener("click", () => {
    const currentValue = parseInt(number.value);
    if (currentValue > 0) {
      number.value = currentValue - 1;
    }
  });

  // Add an event listener for the "Reset" button.
  reset.addEventListener("click", () => {
    number.value = "0";
    alert("Counter has been reset.");
  });
});
