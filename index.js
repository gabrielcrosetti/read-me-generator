// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generatemarkdown")

// TODO: Create an array of questions for user input

const questions = [
    {   
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of what your project is about",
    },
    {
        type: "list",
        name: "license",
        message: "What license did you use?",
        choices: ["MIT", "Apache 2.0", "GNU","None"]
    }   
]




// TODO: Create a function to write README file
function writeToFile(fileName, data) {fs.writeFile(fileName, data, (err)=>{
    err ? console.log(`Error: ${err}`) : console.log(`Success your README is created!`)
})}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=>{
    writeToFile("./dist/README.md", generateMarkdown(responses))
    })
}

// Function call to initialize app
init();
