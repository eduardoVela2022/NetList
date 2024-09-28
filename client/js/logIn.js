// Page elements
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");
const toSignUpBtn = document.querySelector("#to-sign-up-btn");

// Submit function
function handleSubmit(e) {
  e.preventDefault();

  console.log("Log in");
}

// Sign up function
function toSignUp() {
  document.location.assign("signUp.html");
}

// Event listeners
submitBtn.addEventListener("click", handleSubmit);
toSignUpBtn.addEventListener("click", toSignUp);
