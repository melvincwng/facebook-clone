function initializeScript() {
  const toggleEyeIcon = document.querySelector("#toggleEyeIcon");
  const passwordField = document.querySelector("#password_field");

  passwordField.addEventListener("keypress", function () {
    toggleEyeIcon.style.display = "block";
  });

  // Take note for this block, do not use "keypress/keyup/keydown" event ---> it will cause lags in getting the value of passwordField
  // E.g. you type in '1' --> at first, this.value = "" --> then you type in '12', then it shows '1' --> it will always be lagging by one value
  // But if you use "input" event --> there's no lag & you get the latest value of the password field after keying in
  // Reference: https://stackoverflow.com/questions/9906885/detect-backspace-and-del-on-input-event

  passwordField.addEventListener("input", function (event) {
    const inputType = event.inputType;
    const passwordFieldEmpty = !this.value;
    if (inputType === "deleteContentBackward" && passwordFieldEmpty) {
      toggleEyeIcon.style.display = "none";
    }
  });

  toggleEyeIcon.addEventListener("click", function () {
    // Toggle the 'type' attribute of that passwordField input element
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    // Toggle the eye slash icon
    type === "password"
      ? (this.className = "far fa-eye-slash")
      : (this.className = "far fa-eye");
  });
}

initializeScript();
