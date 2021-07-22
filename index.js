//Classes
const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
//Packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const employeeList = [];
const managerQ = [
    {   
        message:"What is the team manger's name?",
        type: "input",
        name: "name",
        //validate: "string"
    },
    {   
        message:"What is the team manager's ID?",
        type: "input",
        name: "id",
        //validate: "number"
    },
    {   
        message:"What is the manager's email?",
        type: "input",
        name: "email",
        //validate: "string"
    },
    {   
        message:"What is the manager's office number?",
        type: "input",
        name: "officeNumber",
        //validate: "string"
    }
]
const employeeType = [
    {
        message:"What employee would you like to add?",
        type: "list",
        name: "employee",
        choices:["Engineer","Intern","None"]
    }
]
const engineerQ = [
    {   
        message:"What is the team engineer's name?",
        type: "input",
        name: "name",
        //validate: "string"
    },
    {   
        message:"What is the team engineer's ID?",
        type: "input",
        name: "id",
        //validate: "number"
    },
    {   
        message:"What is the engineer's email?",
        type: "input",
        name: "email",
        //validate: "string"
    },
    {   
        message:"What is the engineer's github?",
        type: "input",
        name: "github",
        //validate: "string"
    }
]
const internQ = [
    {   
        message:"What is the team intern's name?",
        type: "input",
        name: "name",
        //validate: "string"
    },
    {   
        message:"What is the team intern's ID?",
        type: "input",
        name: "id",
        //validate: "number"
    },
    {   
        message:"What is the intern's email?",
        type: "input",
        name: "email",
        //validate: "string"
    },
    {   
        message:"What is the intern's school?",
        type: "input",
        name: "school",
        //validate: "string"
    }
]
makeEmployee = () =>{
    inquirer.
        prompt(employeeType)
        .then((ans) =>{
            console.log("Creating Manager")
            if(ans.employee == "Engineer"){
                makeEngineer();
            }
            else if(ans.employee == "Intern"){
                makeIntern();
            }
            else{
                console.log("CREATE HTML");
                console.log(employeeList);
            }
            //writeToFile("/README.md",generateMarkdown(ans));
        })
        .catch((error) => {
            error ? console.log(error) : console.log("Done")
        });
}
makeManager = () =>{
    inquirer.
        prompt(managerQ)
        .then((ans) =>{
            console.log(ans);
            employeeList.push(ans);
            console.log("Creating Manager")
            makeEmployee();
            //writeToFile("/README.md",generateMarkdown(ans));
        })
        .catch((error) => {
            error ? console.log(error) : console.log("Done")
        });
}
makeEngineer = () =>{
    inquirer.
    prompt(engineerQ)
    .then((ans) =>{
        console.log(ans);
        employeeList.push(ans);
        console.log("Creating Engineer")
        makeEmployee();
        //writeToFile("/README.md",generateMarkdown(ans));
    })
    .catch((error) => {
        error ? console.log(error) : console.log("Done")
    });
}
makeIntern = () =>{
    inquirer.
    prompt(internQ)
    .then((ans) =>{
        console.log(ans);
        employeeList.push(ans);
        console.log("Creating Intern")
        makeEmployee();
        //writeToFile("/README.md",generateMarkdown(ans));
    })
    .catch((error) => {
        error ? console.log(error) : console.log("Done")
    });
}

menu = () => {
    makeManager();
}

menu();