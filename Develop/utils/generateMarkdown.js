// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  if (license === 'No License') {
    licenseBadge = '';
    return licenseBadge;
  } else if (license === 'Apache 2.0 License') {
    licenseBadge = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
    return licenseBadge;
  } else if (license === 'Boost Software License 1.0') {
    licenseBadge = 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg';
    return licenseBadge;
  } else if (license === 'GNU AGPLv3') {
    licenseBadge = 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg';
    return licenseBadge;
  } else if (license === 'GNU GPLv3') {
    licenseBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    return licenseBadge;
  } else if (license === 'GNU GPLv2') {
    licenseBadge = '(https://img.shields.io/badge/License-GPL%20v2-blue.svg';
    return licenseBadge;
  } else if (license === 'GNU LGPLv3') {
    licenseBadge = 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg';
    return licenseBadge;
  } else if (license === 'ISC') {
    licenseBadge = 'https://img.shields.io/badge/License-ISC-blue.svg';
    return licenseBadge;
  } else if (license === 'MIT') {
    licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
    return licenseBadge;
  } else if (license === 'Mozilla Public License 2.0') {
    licenseBadge = 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
    return licenseBadge;
  } else if (license === 'The Unlicense') {
    licenseBadge = 'https://img.shields.io/badge/License-Unlicense-blue.svg';
    return licenseBadge;
  } else {
    console.log('How did you get here? (renderLicenseBadge())')
  }
  // Shields.io links from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'No License') {
    licenseLink = '';
    return licenseLink;
  } else if (license === 'Apache 2.0 License') {
    licenseLink = `https://choosealicense.com/licenses/apache-2.0/`;
    return licenseLink;
  } else if (license === 'Boost Software License 1.0') {
    licenseLink = `https://choosealicense.com/licenses/bsl-1.0/`;
    return licenseLink;
  } else if (license === 'GNU AGPLv3') {
    licenseLink = `https://choosealicense.com/licenses/agpl-3.0/`;
    return licenseLink;
  } else if (license === 'GNU GPLv3') {
    licenseLink = `https://choosealicense.com/licenses/gpl-3.0/`;
    return licenseLink;
  } else if (license === 'GNU GPLv2') {
    licenseLink = `https://choosealicense.com/licenses/gpl-2.0/`;
    return licenseLink;
  } else if (license === 'GNU LGPLv3') {
    licenseLink = `https://choosealicense.com/licenses/lgpl-2.1/`;
    return licenseLink;
  } else if (license === 'ISC') {
    licenseLink = `https://choosealicense.com/licenses/isc/`;
    return licenseLink;
  } else if (license === 'MIT') {
    licenseLink = `https://choosealicense.com/licenses/mit/`;
    return licenseLink;
  } else if (license === 'Mozilla Public License 2.0') {
    licenseLink = `https://choosealicense.com/licenses/mpl-2.0/`;
    return licenseLink;
  } else if (license === 'The Unlicense') {
    licenseLink = `https://choosealicense.com/licenses/unlicense/`;
    return licenseLink;
  } else {
    console.log('How did you get here? (renderLicenseLink())')
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No License') {
    license = '';
    return license;
  } else {
    return `
## Licensing

[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})
    `
  }
}
// Installation Table of Contents List Item
function renderToCinstallation(data) {
  if (data.confirmInstallation === true) {
    return `
* [Installation](#installation)
    `
  } else {
    return ``;
  }
}
// Installation Body Section
function renderInstallationSection(data) {
  if (data.confirmInstallation === true && data.installationInfo !== null) {
    return `
## Installation

${data.installationInfo}

---
    `
  } else {
    return ``;
  }
}
// Usage Table of Contents List Item
function renderToCusage(data) {
  if (data.confirmUsage === true) {
    return `
* [Usage](#usage)
    `
  } else {
    return ``;
  }
}
// Usage Body Section
function renderUsageSection(data) {
  if (data.confirmUsage === true && data.usageInfo !== null) {
    return `
## Usage

${data.usageInfo}
    `
  } else {
    return ``;
  }
}
// Credits Table of Contents List Item
function renderToCcredits(data) {
  if (data.confirmCredits === true) {
    return `
* [Credits](#credits)
    `
  } else {
    return ``;
  }
}
// Credits Body Section
function renderCreditsSection(data) {
  if (data.confirmCredits === true && data.creditsInfo !== null) {
    return `
## Credits

Below is a list of the people who I collaborated with for this project:

**${data.creditsInfo}**

Thanks for all of the help!
    `
  } else {
    return ``;
  }
}
// Contributing Table of Contents List Item
function renderToCcontributing(data) {
  if (data.confirmContributing === true) {
    return `
* [Contributing](#contributing)
    `
  } else {
    return ``;
  }
}
// Contributing Body Section
function renderContributingSection(data) {
  if (data.confirmContributing === true && data.contributingInfo !== null) {
    return `
## Contributing

${data.contributingInfo}
    `
  } else {
    return ``;
  }
}
// Tests Table of Contents List Item
function renderToCtests(data) {
  if (data.confirmTests === true) {
    return `
* [Tests](#tests)
    `
  } else {
    return ``;
  }
}
// Tests Body Section
function renderTestsSection(data) {
  if (data.confirmTests === true && data.testsInfo !== null) {
    return `
## Tests

${data.testsInfo}
    `
  } else {
    return ``;
  }
}
// Questions Table of Contents List Item
function renderToCquestions(data) {
  if (data.confirmQuestions === true) {
    return `
* [Questions](#questions)
    `
  } else {
    return ``;
  }
}
// Questions Body Section
function renderQuestionsSection(data) {
  if (data.confirmQuestions === true && data.questionsInfo !== null) {
    return `
## Questions

If you have any questions about this project, please see my [Github](https://github.com/${data.githubUsername}) or send me an [email](${data.emailAddress})!
    `
  } else {
    return ``;
  }
}
// Table of Contents Section
function renderTableOfContents(data) {
  if (data.confirmToC === true) {
    return `
## Table of Contents
${renderToCinstallation(data)}
${renderToCusage(data)}
${renderToCcredits(data)}
${renderToCcontributing(data)}
${renderToCtests(data)}
${renderToCquestions(data)}
    `
  } else if (data.confirmToC === false) {
    return ``;
  } else {
    console.log('How did you get here? (renderTableOfContents()');
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseSection(data.licenseInfo)}

${renderTableOfContents(data)}

${renderInstallationSection(data)}
${renderUsageSection(data)}
${renderCreditsSection(data)}
${renderContributingSection(data)}
${renderTestsSection(data)}
${renderQuestionsSection(data)}

`;
}

module.exports = generateMarkdown;

