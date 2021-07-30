//first grabbing all the required elements

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// adding listner

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  // get the values from the inputs
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const password2Val = password2.value.trim();

  if (usernameVal === "") {
    //add error class
    //show error message
    setErrorFor(username, "user name can't be blank");
  } else {
    //add success class
    setSuccessFor(username);
  }
  if (emailVal === "") {
    setErrorFor(email, "Email can't be blank");
  } else if (!isEmail(emailVal)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input, message) {
  const formfield = input.parentElement;
  const small = document.querySelector("small");
  //add error message
  small.innerText = message;
  //add error class
  formfield.className = "formfield error";
}
function setSuccessFor(input) {
  const formfield = input.parentElement;
  formfield.className = "formfield success";
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
