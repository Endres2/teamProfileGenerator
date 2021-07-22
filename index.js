//Classes
const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const generateMarkdown = require("./util/generateMarkdown");
//Packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
//Array of objects to come from the inquirer
const employeeList = [];
//Checks for employee type(Role)
const employeeType = [
    {
        message:"What employee would you like to add?",
        type: "list",
        name: "employee",
        choices:["Engineer","Intern","None"]
    }
]
//Manager questions
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
//Engineer questions
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
//Intern Questions
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
//Makes a html file with the data that is pased to generateMarkdown
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
                makeHTML("/index.html",generateMarkdown(employeeList));
                console.log(employeeList);
            }
            
        })
        .catch((error) => {
            error ? console.log(error) : console.log("Done")
        });
}
//Pushes new obj manager
makeManager = () =>{
    inquirer.
        prompt(managerQ)
        .then((ans) =>{
            let manager = new Manager(ans.name,ans.id,ans.email,ans.officeNumber);
            console.log(manager);
            employeeList.push(manager);
            console.log("Creating Manager")
            makeEmployee();
            
        })
        .catch((error) => {
            error ? console.log(error) : console.log("Done")
        });
}
//Pushes new object of engineer to array
makeEngineer = () =>{
    inquirer.
    prompt(engineerQ)
    .then((ans) =>{
        let engineer = new Engineer(ans.name,ans.id,ans.email,ans.github);
        console.log(engineer);
        employeeList.push(engineer);
        console.log("Creating Engineer")
        makeEmployee();
        
    })
    .catch((error) => {
        error ? console.log(error) : console.log("Done")
    });
}
//Pushesh new object of intern to array
makeIntern = () =>{
    inquirer.
    prompt(internQ)
    .then((ans) =>{
        let intern = new Intern(ans.name,ans.id,ans.email,ans.school);
        console.log(intern);
        employeeList.push(intern);
        console.log("Creating Intern")
        makeEmployee();
        //writeToFile("/README.md",generateMarkdown(ans));
    })
    .catch((error) => {
        error ? console.log(error) : console.log("Done")
    });
}
//Function to write the html file
makeHTML = (fileName, data) =>{
    fs.writeFileSync( path.join(process.cwd())+fileName, data, (err)=>{
        err ? console.log(err) : console.log("README DONE!")
    })
}
//start function
menu = () => {
    makeManager();
}

menu();