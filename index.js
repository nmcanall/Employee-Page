const inquirer = require("inquirer");

const promptManager = () => {
    const manager = {};
    manager.employeeType = "manager";

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
    ])
    .then(details => {
        manager.details = details;
        return manager;
    });
}

const promptEngineer = teamData => {
    console.log(`
=================
Add a New Engineer
=================
`);

    const engineer = {};
    engineer.employeeType = "engineer";
    return inquirer.prompt([
        // engineer name
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the name of the engineer!");
                    return false;
                }
            }
        },
        // engineer ID
        {
            type: "input",
            name: "id",
            message: "What is the engineer's Employee ID?",
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
            message: "What is the engineer's email?",
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
        // GitHub
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                }
                else {
                    console.log("Please enter the username!");
                    return false;
                }
            }
        }
    ])
    .then(details => {
        engineer.details = details;
        teamData.push(engineer);
        return promptMenu(teamData);
    })
}

const promptIntern = teamData => {
    console.log(`
=================
Add a New Intern
=================
`);

    const intern = {};
    intern.employeeType = "intern";
    return inquirer.prompt([
        // intern name
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the name of the intern!");
                    return false;
                }
            }
        },
        // intern ID
        {
            type: "input",
            name: "id",
            message: "What is the intern's Employee ID?",
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
            message: "What is the intern's email?",
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
        // GitHub
        {
            type: "input",
            name: "school",
            message: "What school sponsor's this intern?",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                }
                else {
                    console.log("Please enter the school!");
                    return false;
                }
            }
        }
    ])
    .then(details => {
        intern.details = details;
        teamData.push(intern);
        return promptMenu(teamData);
    })
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
            return promptEngineer(teamData);
        }
        else if(employeeChoice.nextEmployee === "Intern") {
            return promptIntern(teamData);
        }
        else {
            return teamData;
        }
    })
}

promptManager()
    .then(managerData => {
        // Make team data an array
        const teamData = [];
        teamData.push(managerData);
        return promptMenu(teamData);
    })
    .then(completeData => {
        console.log(completeData);
    });