// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    // Readme Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        // ensure project name is given
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name of your project!');
                return false;
            }
        }
    },
    // Readme Description
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project (Required):',
        // ensure project description is given
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Include a description of your project!')
            }
        }
    },
    // Readme Table of Contents (Include Y/N)
    {
        type: 'confirm',
        name: 'confirmToC',
        message: 'Would you like to include a Table of Contents?',
        default: true
    },
    // Readme Table of Contents Included
    {
        type: 'checkbox',
        name: 'confirmToC_choices',
        message: 'Please select the sections you would like to include in your Table of Contents (Check all that apply).',
        choices: ['Installation', 'Usage', 'Contributing', 'Tests', 'Questions', 'License'],
        when: ({ confirmToC }) => {
            if (confirmToC) {
                return true;
            } else {
                return false;
            }
        }
    },
    // Readme Installation
    {
        type: 'input',
        name: 'installation',
        message: 'For Installation: What is the established process to install your project?',
        when: ({ confirmToC_choices /* something referencing installation */ }) => {
            if (confirmToC_choices /* something referencing installation */) {
                return true;
            } else {
                return false
            }
        }
    },
    // Readme Usage
    {
        type: 'input',
        name: 'usage',
        message: 'For Usage: Please include any examples/instructions that are pertinent to the use of your project:',
        when: ({ confirmToC_choices /* something referencing usage */}) => {
            if (confirmToC_choices /* something referencing usage */) {
                return true;
            } else {
                return false;
            }
        }
    },
    // Readme Tests
    {
        type: 'input',
        name: 'tests',
        message: 'For Tests: Please include examples on how to run test for your application:',
        when: ({ confirmToC_choices /* something referencing tests */}) => {
            if (confirmToC_choices /* something referencing tests */) {
                return true;
            } else {
                return false;
            }
        }
    },
    // Readme Contributing
    {
        type: 'input',
        name: 'contributing',
        message: 'For Contributing: Please include guidelines for those who wish to contribute to your work here:',
        when: ({ confirmToC_choices /* something referencing contributing */}) => {
            if (confirmToC_choices /* something referencing contributing */) {
                return true;
            } else {
                return false;
            }
        }
    },
    // Readme Questions
    {
        type: 'input',
        name: 'questions',
        message: 'For Questions: Please enter your GitHub username:',
        // ensure username is given
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        },
        when: ({ confirmToC_choices /* something referencing questions */}) => {
            if (confirmToC_choices /* something referencing questions */) {
                return true;
            } else {
                return false;
            }
        }
    },
    // Readme License
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the license for your project below:',
        choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'nsca', 'unlicense', 'zlib'],
        when: ({ confirmToC_choices /* something referencing license */}) => {
            if (confirmToC_choices /* something referencing license */) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
   inquirer
    .prompt(questions)
    .then(data => {
        const content = generateMarkdown(data)

        fs.writeFile('README.md', content, err => {
            if (err) {
              console.error(err)
              return
            }
            //file written successfully
            console.log('WROTE FILE SUCCESSFULLY')
          })
    });
}

// Function call to initialize app
init();
