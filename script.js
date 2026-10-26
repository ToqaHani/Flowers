
let loginTab = document.getElementById("login-tab");
let signupTab = document.getElementById("signup-tab");
let loginForm = document.getElementById("login-form");
let signupForm = document.getElementById("signup-form");

// Login Button
loginTab.addEventListener("click", function () {
    loginForm.style.display = "block";
    signupForm.style.display = "none";

    loginTab.classList.add("active");
    signupTab.classList.remove("active");
});

// Sign Up Button
signupTab.addEventListener("click", function () {
    signupForm.style.display = "block";
    loginForm.style.display = "none";

    signupTab.classList.add("active");
    loginTab.classList.remove("active");
});
