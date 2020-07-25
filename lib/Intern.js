const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.type = "intern";
        this.school = school;
    }

    printSchool() {
        return `School: ${this.school}`
    }
}


module.exports = Intern;