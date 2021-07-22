const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");


function generateMarkdown(data) {
    let x = "";
    //For each element of array of objects add html if matches object Role
    data.forEach(element =>  {
        if(element.getRole() == "Manager"){
            console.log("Manager added");
            x += `
            <div class=" col-sm-12 col-md-6 col-lg-4 m-1 text-start">
                <div class="card shadow-lg rounded" style="width: 18rem; margin-bottom: 5rem">
                    <div class="card-body bg-primary rounded-top text-white">
                        <h5 class="card-title">${element.getName()}</h5>
                        <h5 class="card-title"><i class="fas fa-mug-hot"></i> ${element.getRole()}</h5>
                    </div>
                    <ul class="list-group  p-3 mb-5 pt-3  rounded list-group-flush ">
                        <li class="list-group-item">Id: ${element.getId()}</li>
                        <li class="list-group-item">Email: ${element.getEmail()}</li>
                        <li class="list-group-item">Office#: ${element.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
             `
        }
        else if(element.getRole() == "Engineer"){
            console.log("Engineer added");
            x += `
            <div class="col-sm-12 col-md-6 col-lg-4 m-1 text-start">
                <div class="card shadow-lg rounded" style="width: 18rem; margin-bottom: 5rem">
                    <div class="card-body bg-primary rounded-top text-white">
                        <h5 class="card-title">${element.getName()}</h5>
                        <h5 class="card-title"><i class="fas fa-glasses"></i> ${element.getRole()}</h5>
                    </div>
                    <ul class="list-group  p-3 mb-5 pt-3  rounded list-group-flush ">
                        <li class="list-group-item">ID: ${element.getId()}</li>
                        <li class="list-group-item">Email: ${element.getEmail()}</li>
                        <li class="list-group-item">Github: ${element.getGithub()}</li>
                    </ul>
                </div>
            </div>
             `
        }
        else if(element.getRole() == "Intern"){
            console.log("Intern added");
            x += `
            <div class="col-sm-12 col-md-6 col-lg-4 m-1 text-start">
                <div class="card shadow-lg rounded" style="width: 18rem; margin-bottom: 5rem">
                    <div class="card-body bg-primary rounded-top text-white">
                        <h5 class="card-title">${element.getName()}</h5>
                        <h5 class="card-title"><i class="fas fa-user-graduate"></i> ${element.getRole()}</h5>
                    </div>
                    <ul class="list-group  p-3 mb-5 pt-3  rounded list-group-flush ">
                        <li class="list-group-item">Id: ${element.getId()}</li>
                        <li class="list-group-item">Email: ${element.getEmail()}</li>
                        <li class="list-group-item">School: ${element.getSchool()}</li>
                    </ul>
                </div>
            </div>
             `
        }
        
    });
    //Fills rest of the HTML
   return `
   <!DOCTYPE html>
   <html>
       <head>
           <meta charset="utf-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <title>Employees</title>
           <meta name="description" content="">
           <meta name="viewport" content="width=device-width, initial-scale=1">
           <!-- CSS only -->
           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
           <script src="https://kit.fontawesome.com/1c9ad4b785.js" crossorigin="anonymous"></script>
           </head>
       <body>
       <div class="jumbotron jumbotron-fluid d-flex justify-content-center btn-danger align-items-center" style="height: 8rem; margin-bottom: 5rem;">
           <div class="container d-flex justify-content-center " >
               <h1 class="display-4 ">My Team</h1>
              
           </div>
        </div>
            <div class="d-flex text-center justify-content-around ">
                <div class="d-flex flex-row justify-content-around flex-wrap">
                    ${x}
                </div>
                    
            </div>
                    
                
        </div>
           
           <script src="" async defer></script>
       </body>
   </html>
`
  }



module.exports = generateMarkdown;