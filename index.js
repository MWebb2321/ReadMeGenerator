const inquirer = require("inquirer");
const fs = require("fs");
const generateMd = require("./generateMd");

//onst writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        message: "What is your project name?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a short description of project",
        name: "description"
    },
    {
        type: "input",
        message: "What command will install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repository?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repository?",
        name: "contribute"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "confirm",
        message: "Include MIT license?",
        name: "license"
    }
]

const promptUser = () => {
    return inquirer
        .prompt(questions);
}

const init = async () => {
    try {
        console.log("Welcome to ReadMe Generator" + "Please answer these questions:")

        const answers = await promptUser();
        if (answers.license) {
            answers.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        } else {answers.license = ""}
        console.log(answers)
        const fileContent = generateMd(answers);
        fs.writeFile("./output/ReadMe.md", fileContent, (err) => {
            if (err)throw err;
        });
        console.log("ReadMe.md created in output folder.");
    } catch (err) {
        console.error("Error creating README. File not created.");
        console.log(err);
    }
}

init();