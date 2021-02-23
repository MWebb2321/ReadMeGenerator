const inquirer = require("inquirer");
const fs = require("fs");

const writeFileAsync = util.promisify(fs.writeFile);

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
]

const promptUser = () => {
    return inquirer
        .prompt(questions);
}

const writeToFile = (fileName, data) => {
    return writeFileAsync(fileName, data);
}

const init = async () => {
    try {
        console.log("Welcome to ReadMe Generator" + "Please answer these questions:")

        const answers = await promptUser();
        const fileContent = generateMd(answers);
        await writeToFile("./output/ReadMe.md", fileContent);
        console.log("ReadMe.md created in output folder.");
    } catch (err) {
        console.error("Error creating README. File not created.");
        console.log(err);
    }
}

init();