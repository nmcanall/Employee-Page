const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.type = "manager";
        this.office = office + "";
    }

    printOffice() {
        return `office: ${this.office}`
    }
}


module.exports = Manager;