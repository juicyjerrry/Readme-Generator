// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

//Creating call license function which will display badge and notice
function renderLicenseBadge(license) {
    if (license === "CC0"){
        return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
    }
    if (license === "Apache"){
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    if (license === "Eclipse"){
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    }
    if (license === "N/A"){
        return ""
    }
}

//Creating function that renders the markdown to determine wether to include the license section
function renderLicenseLink(license) {
    if (license === "N/A"){
        return ""
    }
    if (license != "N/A"){
        return "* [License](#license)"
    }
}

//Function that generates license section in md
function renderLicenseSection(license) {
    if (license === "N/A"){
        return ""
    }
    if (license != "N/A"){
        return `
# license
This readme and associated program use the ${license} license. More info on this can be found by clicking the badge found at the top of the page.`
    }
}

// TODO: Create an array of questions for user input
// const questions = [];
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is your project title? this will also be the title of your Readme.',
            name: 'title',
            //validation process
            validate: (value) => { if (value) { return true } else { return 'Please input a title' } }
        },
        {
            type: 'input',
            message: 'Enter project description',
            name: 'description',
            validate: (value) => { if (value) { return true } else { return 'Please input a description' } }
        },
        {
            type: 'input',
            message: 'Enter installation instructions',
            name: 'install',
            validate: (value) => { if (value) { return true } else { return 'Please input installation instructions' } }
        },
        {
            type: 'input',
            message: 'Enter usage information',
            name: 'usage',
            validate: (value) => { if (value) { return true } else { return 'Please input usage information' } }
        },
        {
            type: 'input',
            message: 'Enter contribution guidelines',
            name: 'contribution',
            validate: (value) => { if (value) { return true } else { return 'Please input contribution guidelines' } }
        },
        {
            type: 'input',
            message: 'Enter test instructions',
            name: 'test',
            validate: (value) => { if (value) { return true } else { return 'Please input test instructions' } }
        },
        {
            type: 'list',
            message: 'Choose your license',
            choices: ['CC0', 'Apache', 'Eclipse', 'N/A'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'Enter your GitHub username',
            name: 'github',
            validate: (value) => { if (value) { return true } else { return 'Please input your GitHub URL' } }
        },
        {
            type: 'input',
            message: 'Enter your Email',
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'Please input a valid email' } }
        },

    ])
    .then(({
        title,
        description,
        install,
        usage,
        contribution,
        test,
        license,
        github,
        email
    }) => {
        //readme template
        const template = 
`
${renderLicenseBadge(license)}        

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
${renderLicenseLink(license)}
* [Contact info](#contact)

# description
${description}

# installation
${install}

# usage
${usage}

# contribution
${contribution}

# testing
${test}

${renderLicenseSection(license)}

# contact
Contact info
Connect more on 
[${github}](https://github.com/${github})

Or email me by clicking below
[${email}](mailto:${email})


`;

    fs.writeFile(`${title}.md`, template, err => err ? console.log(err) : console.log("Successful!"))
    });

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;