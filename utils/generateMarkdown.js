// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge;
  if (license === 'MIT') {
    badge = 'https://img.shields.io/badge/License-MIT-yellow.svg'
  }
  if (license === 'Apache') {
    badge = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  }
  if (license === 'Creative Commons') {
    badge = 'https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg'
  } else {
    badge = ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const link;
  if (license === 'MIT') {
    link = 'https://opensource.org/licenses/MIT'
  }
  if (license === 'Apache') {
    link = 'https://opensource.org/licenses/Apache-2.0'
  }
  if (license === 'Creative Commons') {
    link = 'http://creativecommons.org/publicdomain/zero/1.0/'
  } else {
    link = ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseString;
  if (license != '') {
    licenseString = '[![License](' + renderLicenseBadge(license) + ')](' + renderLicenseLink(license) + ')'
  } else {
    licenseString = ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Licenses
  ${renderLicenseSection(answers.license)}

  [GitHub Profile](https://github.com/${answers.username})

  [Email Address](mailto:${answers.email})
`;
}

module.exports = generateMarkdown;