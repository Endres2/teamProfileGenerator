const Manager = require("../lib/Manager");
const manager = new Manager("Endres", 2, "endres@gmail.com", 1);

describe("Manager", () => {
    //Test for initialization
   it("Instantiates new manager", () => {
       const e = new Manager();
       expect(typeof(e)).toBe("object");
   });
   //Tests for getter of the functions
   it("Function getName returns a string", () => {
       expect(manager.getName()).toBe("Endres");
       expect(typeof(manager.getName())).toBe("string")
   });
 
   it("Function getId returns a Integer", () => {
       expect(manager.getId()).toBe(2);
       expect(typeof(manager.getId())).toBe("number");
   });
 
   it("Function getEmail should return a string", () => {
       expect(manager.getEmail()).toBe("endres@gmail.com");
       expect(typeof(manager.getEmail())).toBe("string");
   });
   it("Function getRole should return String of Manager", () =>{
       expect(manager.getRole()).toBe("Manager");
       expect(typeof(manager.getRole())).toBe("string");
   });
   it("Function getOfficeNumber expected to be a Number", () =>{
       expect(manager.getOfficeNumber()).toBe(1);
       expect(typeof(manager.getOfficeNumber())).toBe("number");
   });
 
 });