const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "What is your project name?",
        name: "title"
    },
    
]