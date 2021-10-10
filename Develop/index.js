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
    // License Section
    {
        type: 'list',
        name: 'licenseInfo',
        message: 'Please choose the license for your project below:',
        choices: ['No License', 'Apache 2.0 License', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU GPLv2', 'GNU LGPLv3', 'ISC', 'MIT', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    // Readme Description
    {
        type: 'input',
        name: 'description',
        message: 'Please include a detailed description of your project (Required):',
        // ensure project description is given
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!')
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
    // Installation Section (Include Y/N)
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to create an installation section?',
        default: true
    },
    {
        type: 'input',
        name: 'installationInfo',
        message: 'What commands/information should the user know in order to use this repo? Input this information for the installation section here:',
        when: ({ confirmInstallation }) => {
            if (confirmInstallation) {
                return true;
            } else {
                return false;
            }
        },
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter information for the installation section!')
            }
        }
    },
    // Usage Section (Include Y/N)
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to create a Usage section?',
        default: true
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'In order to use this repo, what does the user need to know? Please enter the information for the Usage section here:',
        when: ({ confirmUsage }) => {
            if (confirmUsage) {
                return true;
            } else {
                return false;
            }
        },
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter information for the usage section!')
            }
        }
    },
    // Credits
    {
        type: 'confirm',
        name: 'confirmCredits',
        message: 'Would you like to create a Credits section?',
        default: true
    },
    {
        type: 'input',
        name: 'creditsInfo',
        message: 'Who are your collaborators? Enter their GitHub username(s) as a comma separated list here:',
        when: ({ confirmCredits }) => {
            if (confirmCredits) {
                return true;
            } else {
                return false;
            }
        },
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your collaborators GitHub username(s)')
            }
        }
    },
    // Contributing Section (Include Y/N)
    {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to create a Contributing section?',
        default: true
    },
    {
        type: 'input',
        name: 'contributingInfo',
        message: 'For users who wish to contribute to this repo, what do they need to know? Please enter the information for the Contributing section here:',
        when: ({ confirmContributing }) => {
            if (confirmContributing) {
                return true;
            } else {
                return false;
            }
        },
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter information for the installation section!')
            }
        }
    },
    // Tests Section (Include Y/N)
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to create a Tests section?',
        default: true
    },
    {
        type: 'input',
        name: 'testsInfo',
        message: 'Please insert the information you would like to add to the Tests section here:',
        when: ({ confirmTests }) => {
            if (confirmTests) {
                return true;
            } else {
                return false;
            }
        },
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter information for the Tests section!')
            }
        }
    },
    // Questions Section (Include Y/N)
    {
        type: 'confirm',
        name: 'confirmQuestions',
        message: 'Would you like to create a Questions section so others may contact you about your repo? Yes',
        default: true
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please enter your GitHub username:',
        when: ({ confirmQuestions }) => {
            if (confirmQuestions) {
                return true;
            } else {
                return false;
            }
        },
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!')
            }
        }
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Please enter your email:',
        when: ({ confirmQuestions }) => {
            if (confirmQuestions) {
                return true;
            } else {
                return false;
            }
        },
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email!')
            }
        }
    },

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
   inquirer
    .prompt(questions)
    .then(data => {
        const content = generateMarkdown(data)
        console.log('Content ', data)

        fs.writeFile('./Develop/dist/README.md', content, err => {
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
