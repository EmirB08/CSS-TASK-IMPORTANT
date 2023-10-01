/* Found these functions online. I don't really have this level of Javascript knowledge to type it out intuitively but I did understand it once I found code
to do the functions I wanted */


document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.querySelector(".sign-up-form");
  const emailInput = document.querySelector("#email");
  const errorMessage = document.querySelector("#error-message");
  const popup = document.getElementById("success-popup");
  const dismissButton = document.getElementById("dismiss-button");
  const confirmationMessage = document.getElementById("confirmation-message");

  form.addEventListener("submit", validateForm);

  emailInput.addEventListener("input", clearError);

  dismissButton.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});

function validateForm(event) {
  event.preventDefault();

  const emailInput = document.querySelector("#email");
  const errorMessage = document.querySelector("#error-message");
  const popup = document.getElementById("success-popup");
  const confirmationMessage = document.getElementById("confirmation-message");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailInput.value === "" || !emailPattern.test(emailInput.value)) {
    emailInput.classList.add("invalid");
    errorMessage.textContent = "Invalid email address";
  } else {
    emailInput.classList.remove("invalid");
    errorMessage.textContent = "";
    popup.style.display = "grid";
    confirmationMessage.innerHTML = `A confirmation email has been sent to <b>${emailInput.value}</b>. Please open it and click the button inside to confirm your subscription.`;
  }
}

function clearError() {
  const emailInput = document.querySelector("#email");
  const errorMessage = document.querySelector("#error-message");

  emailInput.classList.remove("invalid");
  errorMessage.textContent = "";
}
