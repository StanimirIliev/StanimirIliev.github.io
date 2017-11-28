const loginContent = document.getElementById("loginForm")
const registerContent = document.getElementById("registerForm")
const login = document.getElementById("buttonLogin")
const register = document.getElementById("buttonRegister")

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
  loginContent.style.position = "absolute";
  login.innerText = "I have already account";
}
function expandLogin() {
  loginContent.style.visibility = "visible";
  loginContent.style.position = "relative";
  login.innerText = "Log in";
}
function shrinkRegister() {
  registerContent.style.visibility = "hidden";
  registerContent.style.position = "absolute";
  register.innerText = "Create new account";
}
function expandRegister() {
  registerContent.style.visibility = "visible";
  registerContent.style.position = "relative";
  register.innerText = "Register";
}
