// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
    },
];

// Function to generate README content
function generateREADME(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}
`;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log('Initialization...');
}

// Function call to initialize app
init();
