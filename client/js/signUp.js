// Page elements
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");
const toLogInBtn = document.querySelector("#to-log-in-btn");

// Submit function
function handleSubmit(e) {
  e.preventDefault();

  console.log("Sign up");
}

// Log in function
function toLogIn() {
  document.location.replace("login.html");
}

// Event listeners
submitBtn.addEventListener("click", handleSubmit);
toLogInBtn.addEventListener("click", toLogIn);
