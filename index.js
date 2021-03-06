// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
  "Project Title",
  "Description",
  "Installation Instructions",
  "Usage Information",
  "Contribution Guidelines",
  "Testing Instructions",
  "License References",
  "GitHub Username",
  "Email Address",
];

// Create a function to write README file
const writeReadMe = (answers) => {
  fs.writeFile("SampleREADME.md", generateMarkdown(answers), (err) => err ? console.log(error) : console.log('Success!'));
};

// Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description",
      },
      {
        type: "input",
        message: questions[2],
        name: "installation",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
      },
      {
        type: "list",
        choices: ["MIT", "Apache", "Creative Commons"],
        message: questions[6],
        name: "license",
      },
      {
        type: "input",
        message: questions[4],
        name: "contributing",
      },
      {
        type: "input",
        message: questions[5],
        name: "tests",
      },

      {
        type: "input",
        message: questions[7],
        name: "username",
      },
      {
        type: "input",
        message: questions[8],
        name: "email",
      },
    ])
    .then((answers) => writeReadMe(answers))
}

// Function call to initialize app
init();