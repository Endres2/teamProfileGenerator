const Intern = require("../lib/Intern");
const intern = new Intern("Sam", 4, "sam@gmail.com", "FIU");

describe("Intenr", () => {
    //Test for initialization
   it("Instantiates new Engineer", () => {
       const e = new Intern();
       expect(typeof(e)).toBe("object");
   });
   //Tests for getter of the functions
   it("Function getName returns a string", () => {
       expect(intern.getName()).toBe("Sam");
       expect(typeof(intern.getName())).toBe("string")
   });
 
   it("Function getId returns a Integer", () => {
       expect(intern.getId()).toBe(4);
       expect(typeof(intern.getId())).toBe("number");
   });
 
   it("Function getEmail should return a string", () => {
       expect(intern.getEmail()).toBe("sam@gmail.com");
       expect(typeof(intern.getEmail())).toBe("string");
   });
   it("Function getRole should return String of Engineer", () =>{
       expect(intern.getRole()).toBe("Intern");
       expect(typeof(intern.getRole())).toBe("string");
   });
   it("Function getGithub expected to be a a String", () =>{
       expect(intern.getSchool()).toBe("FIU");
       expect(typeof(intern.getSchool())).toBe("string");
   });
 
 });