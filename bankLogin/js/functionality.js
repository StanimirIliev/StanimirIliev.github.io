const loginContent = document.getElementById("loginForm")
const registerContent = document.getElementById("registerForm")
const login = document.getElementById("login")
const register = document.getElementById("register")
const screenWidth = window.screen.width
var loginExpand = ""
var shrinked = ""
var registerExpand = ""
if(screenWidth <= 600) {
  loginExpand = "50px"
  shrinked = "-135px"
  registerExpand = "-60px"
}
else if (screenWidth > 600 && screenWidth <= 900) {

}
else {
  loginExpand = "120px"
  shrinked = "180px"
  registerExpand = "90px"
}

function loginShrinkExpand() {
  if(loginContent.style.visibility === "visible") {
    shrinkLogin()
  }
  else {
    if(registerContent.style.visibility === "visible") {
      shrinkRegister()
    }
    expandLogin()
  }
}
function registerShrinkExpand() {
  if(registerContent.style.visibility === "visible") {
    shrinkRegister()
  }
  else {
    if(loginContent.style.visibility === "visible") {
      shrinkLogin()
    }
    expandRegister()
  }
}
function shrinkLogin() {
  loginContent.style.visibility = "hidden";
  register.style.bottom = shrinked;
  login.innerText = "I have already account"
  register.style.transition = "all 1s";
}
function expandLogin() {
  loginContent.style.visibility = "visible";
  register.style.bottom = "0";
  login.innerText = "Log in"
  register.style.transition = "all 1s";
}
function shrinkRegister() {
  registerContent.style.visibility = "hidden";
  register.style.bottom = shrinked;
  register.innerText = "Create new account"
  register.style.transition = "all 1s";
}
function expandRegister() {
  registerContent.style.visibility = "visible";
  register.style.bottom = "0";
  register.innerText = "Register"
  register.style.transition = "all 1s";
}
