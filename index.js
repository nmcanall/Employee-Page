const inquirer = require("inquirer");

const promptManager = () => {
    return inquirer.prompt([
        // Manager name
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the name of the project manager!");
                    return false;
                }
            }
        },
        // Manager ID
        {
            type: "input",
            name: "id",
            message: "What is the team manager's Employee ID?",
            validate: idInput => {
                if(idInput) {
                    return true;
                }
                else {
                    console.log("Please enter the ID!");
                    return false;
                }
            }
        },
        // Email
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?",
            validate: emailInput => {
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
                    return true;
                }
                else {
                    console.log("Please enter a valid email!");
                    return false;
                }
            }
        },
        // Office number
        {
            type: "input",
            name: "office",
            message: "What is the team manager's office number?",
            validate: officeInput => {
                if(officeInput) {
                    return true;
                }
                else {
                    console.log("Please enter the office number!");
                    return false;
                }
            }
        }
    ]);
}

const promptEngineer = teamData => {
    console.log(`
=================
Add a New Engineer
=================
`);
    return console.log("adding engineer");
}

const promptIntern = teamData => {
    console.log(`
=================
Add a New Intern
=================
`);
    return console.log("adding Intern");
}

const promptMenu = teamData => {
    return inquirer.prompt([
        {
            type: "list",
            name: "nextEmployee",
            message: "What type of employee do you want to add?",
            choices: ["Engineer", "Intern", "I'm done adding employees."]
        }
    ])
    .then(employeeChoice => {
        if(employeeChoice.nextEmployee === "Engineer") {
            promptEngineer(teamData);
        }
        else if(employeeChoice.nextEmployee === "Intern") {
            promptIntern(teamData);
        }
        else {
            return;
        }
    })
}

promptManager()
    .then(employeeData => {
        // Make team data an array
        const teamData = [];
        teamData.push(employeeData);
        promptMenu(teamData);
    });