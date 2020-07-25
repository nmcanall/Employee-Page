const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const manager = [];
const engineers = [];
const interns = [];

const buildObjects = data => {
    for(let i = 0; i < data.length; i++) {
        const {employeeType, details} = data[i];
        if(employeeType === "manager") {
            manager.push(new Manager(details.name, details.id, details.email, details.office));
        }
        else if(employeeType === "engineer") {
            engineers.push(new Engineer(details.name, details.id, details.email, details.github));
        }
        else {
            interns.push(new Intern(details.name, details.id, details.email, details.school));
        }
    }
}

const buildManagerCard = () => {
    return `
            <div class="card shadow m-4" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${manager[0].name}</h2>
                    <h4 class="card-subtitle">Manager</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${manager[0].printID()}</li>
                        <li class="list-group-item">${manager[0].printEmail()}</li>
                        <li class="list-group-item">${manager[0].printOffice()}</li>
                    </ul>
                </div>
            </div>`
}

const buildEngineerCards = () => {
    let html = ``;
    for(let i = 0; i < engineers.length; i++) {
        html += `
            <div class="card shadow m-4" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${engineers[i].name}</h2>
                    <h4 class="card-subtitle">Engineer</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${engineers[i].printID()}</li>
                        <li class="list-group-item">${engineers[i].printEmail()}</li>
                        <li class="list-group-item">${engineers[i].printGithub()}</li>
                    </ul>
                </div>
            </div>`
    }
    return html;
}

const buildInternCards = () => {
    let html = ``;
    for(let i = 0; i < interns.length; i++) {
        html += `
            <div class="card shadow m-4" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${interns[i].name}</h2>
                    <h4 class="card-subtitle">Intern</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${interns[i].printID()}</li>
                        <li class="list-group-item">${interns[i].printEmail()}</li>
                        <li class="list-group-item">${interns[i].printSchool()}</li>
                    </ul>
                </div>
            </div>`
    }
    return html;
}

const generatePage = data => {
    buildObjects(data);
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Employee Page</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    </head>
    <body class="bg-light">
        <header class="bg-danger text-white p-4 text-center">
            <h1>My Team</h1>
        </header>
        <main class="p-5 d-flex justify-content-center flex-wrap">
            ${buildManagerCard()}
            ${buildEngineerCards()}
            ${buildInternCards()}
        </main>
    </body>
</html>`
}

module.exports = generatePage;