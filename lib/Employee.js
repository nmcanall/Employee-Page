class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id + "";
        this.email = email;
    }

    printID() {
        return `ID: ${this.id}`
    }

    printEmail() {
        return `ID: ${this.email}`
    }
}

module.exports = Employee;