const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// array of questions for user
const questions = [
    {
        type:"input",
        message:"What is your GitHub username?",
        name:"UserName",
    },
    {
        type:"input",
        message:"What is your email address?",
        name:"Email",
    },
    {
        type:"input",
        message:"What is your project's name?",
        name:"Name",
    },
    {
        type:"input",
        message:"Please write a short description of your project",
        name:"Descroption",
    },
    {
        type:"input",
        message:"What kind of license should your project have?",
        name:"License",
    },
    {
        type:"input",
        message:"What command should be run to install dependencies?",
        name:"Install",
    },
    {
        type:"input",
        message:"What cpmman should be run to run tests?",
        name:"Run",
    },
    {
        type:"input",
        message:"What does the user need to know about using the repo?",
        name:"Using",
    },
    {
        type:"input",
        message:"What does the user need to know about contributing to the repo?",
        name:"Contributing",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./ReadmeDemo/"+fileName,data,function(err){
        if(err){
            return console.log(err);
        }
        else{
            console.log("Run Successfully");
        }
    })
}

// function to initialize program
function init() {
}

// function call to initialize program
init();
