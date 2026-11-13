// Experiment 2 — JavaScript ES6
// AURA Login Module: User Interface Logic

import { validateLogin, getUserName } from "./auth.js";

// Access HTML elements
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const errorMessage = document.getElementById("errorMessage");
const loginCard = document.querySelector(".login-card");

// Toggle password visibility
togglePassword.addEventListener("click", () => {

    const isHidden = passwordInput.type === "password";

    passwordInput.type = isHidden ? "text" : "password";

    togglePassword.textContent = isHidden ? "Hide" : "Show";
});

// Handle login form submission
loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.getElementById("username").value.trim();
    const password = passwordInput.value;

    // Validate credentials
    if (validateLogin(email, password)) {

        const userName = getUserName();

        loginCard.innerHTML = `
            <div class="welcome-screen">
                <span class="eyebrow">AUTHENTICATION SUCCESSFUL</span>

                <h2>Welcome back<span class="accent">.</span></h2>

                <p class="welcome-message">
                    Hello, ${userName}!<br>
                    You've successfully signed in to AURA.
                </p>

                <button id="logoutButton" class="login-button">
                    Sign out <span>→</span>
                </button>
            </div>
        `;

        document.getElementById("logoutButton")
            .addEventListener("click", () => {
                window.location.reload();
            });

    } else {

        errorMessage.textContent =
            "Incorrect email or password. Please try again.";

    }
});