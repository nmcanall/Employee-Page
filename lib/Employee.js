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
        return `Email: <a href="mailto:${this.email}">${this.email}</a>`
    }
}

module.exports = Employee;