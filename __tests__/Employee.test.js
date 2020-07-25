const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const name = "John";
    const id = 1234;
    const email = "john@work.com"
    const employee = new Employee(name, id, email);

    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id + "");
    expect(employee.email).toBe(email);
});

test("tests if print functions are valid", () => {
    const name = "John";
    const id = 1234;
    const email = "john@work.com"
    const employee = new Employee(name, id, email);

    expect(employee.printID()).toEqual(expect.stringContaining(id + ""));
    expect(employee.printEmail()).toEqual(expect.stringContaining(email));
})