// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT"){
        return `![MIT](https://img.shields.io/badge/license-MIT-brightgreen)`
    }
    else if (license === "Apache 2.0"){
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if (license === "GNU") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
    else if (license === "None") {
      return `No Licenses`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Technologies
${data.technologies}

## Installation
${data.installation}

## Usage 
${data.usage}

## Features
${data.features}

## Tests
${data.tests}

## Acknowledgements
${data.acknowledgements}

## My Profiles
${data.profiles}



`;
}

module.exports = generateMarkdown;
