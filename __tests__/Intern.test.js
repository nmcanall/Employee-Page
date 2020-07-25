const Intern = require("../lib/Intern");

test("creates an intern object", () => {
    const name = "John";
    const id = 1234;
    const email = "john@work.com";
    const school = "Berkeley";
    const intern = new Intern(name, id, email, school);

    expect(intern.type).toBe("intern");
    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id + "");
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
});

test("tests if print functions are valid", () => {
    const name = "John";
    const id = 1234;
    const email = "john@work.com";
    const school = "Berkeley";
    const intern = new Intern(name, id, email, school);

    expect(intern.printID()).toEqual(expect.stringContaining(id + ""));
    expect(intern.printEmail()).toEqual(expect.stringContaining(email));
    expect(intern.printSchool()).toEqual(expect.stringContaining(school));
})