// Select the HTML form element with the attribute 'data-form'
const form = document.querySelector("[data-form]");

// Select the HTML element with the attribute 'data-result' where the result will be displayed
const result = document.querySelector("[data-result]");

// Add an event listener to the form for the 'submit' event
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Create a new FormData object from the form's entries
  const entries = new FormData(event.target);

  // Destructure the 'dividend' and 'divider' values from the form entries
  const { dividend, divider } = Object.fromEntries(entries);

  // Check if either 'dividend' or 'divider' is empty
  if (!dividend || !divider) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again.";
  }
  // Check if either 'dividend' or 'divider' is negative
  else if (dividend < 0 || divider < 0) {
    // Create an error object
    const error = new Error(
      "Division not performed. Invalid number provided. Try again"
    );
    // Log the error to the console
    console.error(error);
    // Display the error message in the 'result' element
    result.innerText = error;
  }
  // Check if either 'dividend' or 'divider' is not a number
  else if (isNaN(dividend) || isNaN(divider)) {
    // Create a critical error object
    const criticalError = new Error(
      "Something critical went wrong. Please reload the page."
    );
    // Select the HTML body element
    const htmlBody = document.querySelector("body");
    // Log the critical error to the console
    console.error(criticalError);
    // Replace the content of the entire body with the critical error message
    htmlBody.innerText = criticalError;
  }
  // If none of the above conditions are met, perform the division and display the result
  else {
    result.innerText = Math.floor(dividend / divider);
  }
});
