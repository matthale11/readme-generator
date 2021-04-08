// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['Project Title', 'Description', 'Installation Instructions', 'Usage Information', 'Contribution Guidelines', 'Test Instructions', 'License', 'GitHub Username', 'Email Address'];

// TODO: Create a function to write README file
const writeReadMe = (answers) =>
    `# ${answers[0]}

    ## Description
    ${answers[1]}

    ## Installation Instructions
    ${answers[2]}

    ## Usage Information
    ${answers[3]}

    ## Contribution Guidelines
    ${answers[4]}

    ## Test Instructions
    ${answers[5]}

    ## Licenses
    ${answers[6]}

    [GitHub Profile](https://github.com/${answers[7]})

    [Email Address](mailto:${answers[8]})`;



// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
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
    .then((data) => fs.writeFile('NEWREADME.md', writeReadMe(data)))
    .then(() => console.log('README successfully created!'))
    .catch((err) => console.error(err))
};

// Function call to initialize app
init();