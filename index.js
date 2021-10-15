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
        choices: ["MIT", "Apache 2.0", "GNU","None"],
    },
    {
        type: "input",
        name: "technologies",
        message: "What technologies did you use for your project?",
    }, 
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is your project used for? Provide instructions or examples.",
    },
    {
        type: "input",
        name: "features",
        message: "What are some features in your project?"
    },
    {
        type: "input",
        name: "profiles",
        message: "What is the link to your Github profile? LinkedIn profile?"
    },
    {
        type: "input",
        name: "acknowledgements",
        message: "Share the links to any contributors, tutorials, resources, etc."
    },
    {
        type: "input",
        name: "tests",
        message: "Explain testing details here."
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
    console.log()
    })

}

// Function call to initialize app
init();
