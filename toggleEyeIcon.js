const toggleEyeIcon = document.querySelector("#toggleEyeIcon");
const passwordField = document.querySelector("#password_field");

passwordField.addEventListener("keypress", function () {
  toggleEyeIcon.style.display = "block";
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
