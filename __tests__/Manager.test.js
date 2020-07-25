const Manager = require("../lib/Manager");

test("creates an manager object", () => {
    const name = "John";
    const id = 1234;
    const email = "john@work.com";
    const office = 101;
    const manager = new Manager(name, id, email, office);

    expect(manager.type).toBe("manager");
    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id + "");
    expect(manager.email).toBe(email);
    expect(manager.office).toBe(office + "");
});

test("tests if print functions are valid", () => {
    const name = "John";
    const id = 1234;
    const email = "john@work.com";
    const office = "GitJohn";
    const manager = new Manager(name, id, email, office);

    expect(manager.printID()).toEqual(expect.stringContaining(id + ""));
    expect(manager.printEmail()).toEqual(expect.stringContaining(email));
    expect(manager.printOffice()).toEqual(expect.stringContaining(office + ""));
})