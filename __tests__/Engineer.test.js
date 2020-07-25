const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
    const name = "John";
    const id = 1234;
    const email = "john@work.com";
    const github = "GitJohn";
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.type).toBe("engineer");
    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id + "");
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github);
});

test("tests if print functions are valid", () => {
    const name = "John";
    const id = 1234;
    const email = "john@work.com";
    const github = "GitJohn";
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.printID()).toEqual(expect.stringContaining(id + ""));
    expect(engineer.printEmail()).toEqual(expect.stringContaining(email));
    expect(engineer.printGithub()).toEqual(expect.stringContaining(github));
})