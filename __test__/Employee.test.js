
const Employee = require("../lib/Employee");
const employee = new Employee("Martha", 1, "martha@gmail.com")
//Test for the Employee class
 describe("Employee", () => {
     //Test for initialization
    it("Instantiates new employee", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });
    //Tests for getter of the functions
    it("Function getName returns a string", () => {
        expect(employee.getName()).toBe("Martha");
        expect(typeof(employee.getName())).toBe("string")
    });
  
    it("Function getId returns a Integer", () => {
        expect(employee.getId()).toBe(1);
        expect(typeof(employee.getId())).toBe("number");
    });
  
    it("Function getEmail should return a string", () => {
        expect(employee.getEmail()).toBe("martha@gmail.com");
        expect(typeof(employee.getEmail())).toBe("string");
    });
    it("Function getRole should return String of Employee", () =>{
        expect(employee.getRole()).toBe("Employee");
        expect(typeof(employee.getRole())).toBe("string");
    });
  
  });
  