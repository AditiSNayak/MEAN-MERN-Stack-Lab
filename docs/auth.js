// Experiment 2: JavaScript ES6
// AURA Login Module

// Demonstration user account
const demoUser = {
    name: "AURA Student",
    email: "student@aura.com",
    password: "Aura@123"
};

// ES6 arrow function for credential validation
export const validateLogin = (email, password) => {
    const {
        email: registeredEmail,
        password: registeredPassword
    } = demoUser;

    return (
        email === registeredEmail &&
        password === registeredPassword
    );
};

// ES6 arrow function to retrieve the user's name
export const getUserName = () => demoUser.name;