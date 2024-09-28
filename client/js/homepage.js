// Page elements
const titleInput = document.querySelector("#title-input");
const descriptionInput = document.querySelector("#description-input");
const submitBtn = document.querySelector("#submit-btn");
const list = document.querySelector("#list");
const logOutBtn = document.querySelector("#log-out-btn");

// Submit function
function handleSubmit(e) {
  e.preventDefault();

  console.log("Submit list item");
}

// Log out function
function handleLogout() {
  document.location.replace("login.html");
}

// Event listeners
submitBtn.addEventListener("click", handleSubmit);
logOutBtn.addEventListener("click", handleLogout);
