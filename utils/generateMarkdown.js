// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let text;
  switch (license) {
    case "MIT":
      text = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case "Apache":
      text = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      break;
    case "Creative Commons":
      text = "https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg";
      break;
    default:
      "";
  }
  return text;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let text;
  switch (license) {
    case "MIT":
      text = "https://opensource.org/licenses/MIT";
      break;
    case "Apache":
      text = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Creative Commons":
      text = "http://creativecommons.org/publicdomain/zero/1.0/";
      break;
    default:
      "";
  }
  return text;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != null) {
    return (
      "![License](" +
      renderLicenseBadge(license) +
      ") [License Link](" +
      renderLicenseLink(license) +
      ")"
    );
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  return `# ${answers.title}

  ## Description
  ${answers.description}

  # Table of Contents
  - Installation
  - Usage
  - License
  - Contributing
  - Tests

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Licenses
  ${renderLicenseSection(answers.license)}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  [GitHub Profile](https://github.com/${answers.username})

  [Email Address](mailto:${answers.email})
`;
}

module.exports = generateMarkdown;