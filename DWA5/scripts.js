const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try agian.";
  } else if (dividend < 0 || divider < 0) {
    const error = new Error(
      "Division not performed. Invalid number provied. Try again"
    );
    console.error(error);
    result.innerText = error;
  } else if (isNaN(dividend) || isNaN(divider)) {
    const criticalError = new Error(
      "Something critical went wrong. Please reload the page."
    );
    const htmlBody = document.querySelector("body");
    console.error(criticalError);
    htmlBody.innerText = criticalError;
  } else {
    result.innerText = Math.round(dividend / divider);
  }
});
