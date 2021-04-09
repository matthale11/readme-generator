// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "Project Title",
  "Description",
  "Installation Instructions",
  "Usage Information",
  "Contribution Guidelines",
  "Test Instructions",
  "License",
  "GitHub Username",
  "Email Address",
];

// TODO: Create a function to write README file
const writeReadMe = (answers) => {
  fs.writeFile("NewREADME.md", generateMarkdown(answers));
};

// TODO: Create a function to initialize app
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
        type: "list",
        choices: ["MIT", "Apache", "Creative Commons"],
        message: questions[6],
        name: "license",
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
    .then(writeReadMe(answers))
    .then(() => console.log("README successfully created!"))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();