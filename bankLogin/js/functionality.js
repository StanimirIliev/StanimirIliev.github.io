const loginContent = document.getElementById("loginForm")
const registerContent = document.getElementById("registerForm")
const login = document.getElementById("login")
const register = document.getElementById("register")
const screenWidth = window.screen.width
var expandLoginPx = ""
var shrinkRegisterPx = ""
var expandRegisterPx = ""
if(screenWidth <= 480) {
  expandLoginPx = "50px"
  shrinkRegisterPx = "-135px"
  expandRegisterPx = "-60px"
}
else {
  expandLoginPx = "55px"
  shrinkRegisterPx = "-150px"
  expandRegisterPx = "-67px"
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
  register.style.marginBottom = "0";
  login.innerText = "I have already account"
  register.style.transition = "all 1s";
}
function expandLogin() {
  loginContent.style.visibility = "visible";
  register.style.marginBottom = expandLoginPx;
  login.innerText = "Log in"
  register.style.transition = "all 1s";
}
function shrinkRegister() {
  registerContent.style.visibility = "hidden";
  register.style.marginTop = shrinkRegisterPx;
  register.innerText = "Create new account"
  register.style.transition = "all 1s";
}
function expandRegister() {
  registerContent.style.visibility = "visible";
  register.style.marginTop = expandRegisterPx;
  register.innerText = "Register"
  register.style.transition = "all 1s";
}
