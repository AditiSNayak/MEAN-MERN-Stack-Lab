// Experiment 2: JavaScript ES6 Features
// Arrow Functions, Template Literals and Modules

// Arrow function to calculate percentage
export const calculatePercentage = (marks, total) => {
    return (marks / total) * 100;
};

// Arrow function to determine result
export const checkResult = (percentage) => {
    return percentage >= 40 ? "Pass" : "Fail";
};

// Arrow function using template literals
export const displayStudent = (name, course, percentage, result) => {
    return `
    ===== STUDENT INFORMATION =====
    Name       : ${name}
    Course     : ${course}
    Percentage : ${percentage.toFixed(2)}%
    Result     : ${result}
    ===============================
    `;
};  