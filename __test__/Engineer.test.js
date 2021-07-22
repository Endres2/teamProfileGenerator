const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Sasha", 3, "sasha@gmail.com", "superGit");

describe("Engineer", () => {
    //Test for initialization
   it("Instantiates new Engineer", () => {
       const e = new Engineer();
       expect(typeof(e)).toBe("object");
   });
   //Tests for getter of the functions
   it("Function getName returns a string", () => {
       expect(engineer.getName()).toBe("Sasha");
       expect(typeof(engineer.getName())).toBe("string")
   });
 
   it("Function getId returns a Integer", () => {
       expect(engineer.getId()).toBe(3);
       expect(typeof(engineer.getId())).toBe("number");
   });
 
   it("Function getEmail should return a string", () => {
       expect(engineer.getEmail()).toBe("sasha@gmail.com");
       expect(typeof(engineer.getEmail())).toBe("string");
   });
   it("Function getRole should return String of Engineer", () =>{
       expect(engineer.getRole()).toBe("Engineer");
       expect(typeof(engineer.getRole())).toBe("string");
   });
   it("Function getGithub expected to be a a String", () =>{
       expect(engineer.getGithub()).toBe("superGit");
       expect(typeof(engineer.getGithub())).toBe("string");
   });
 
 });