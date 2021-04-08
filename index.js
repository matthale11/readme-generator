// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['Project Title', 'Description', 'Installation Instructions', 'Usage Information', 'Contribution Guidelines', 'Test Instructions', 'License', 'GitHub Username (Questions)', 'Email Address (Questions)'];

// TODO: Create a function to write README file
const writeReadMe = data => {
    const fileName = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeToFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')  
    )};


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contribution',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'testing',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'license',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'username',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            },
        ])
        .then(writeReadMe(data));
};

// Function call to initialize app
init();
