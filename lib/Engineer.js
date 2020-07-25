const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.type = "engineer";
        this.github = github;
    }

    printGithub() {
        return `GitHub: ${this.github}`
    }
}


module.exports = Engineer;