// Experiment 2: Main Program

import {
    calculatePercentage,
    checkResult,
    displayStudent
} from "./student-utils.mjs";

// Using const
const studentName = "Aditi";
const course = "MEAN and MERN Stack";
const totalMarks = 500;

// Using let
let obtainedMarks = 450;

// Calculate percentage using arrow function
const percentage = calculatePercentage(
    obtainedMarks,
    totalMarks
);

// Determine result
const result = checkResult(percentage);

// Display output using template literals
console.log(
    displayStudent(
        studentName,
        course,
        percentage,
        result
    )
);