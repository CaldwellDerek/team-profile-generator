const generateHTML = require("./util/generateHtml");
const fs = require("fs");
const i = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamArray = [];

// const newManager = new Manager("manager", 2, "manager@email.com", 13);
// const newEngineer = new Engineer("engineer", 3, "engineer@email.com", "engineer@github.com");
// const newIntern = new Intern("intern", 4, "intern@email.com", "skewl");

// const testArray = [newManager, newEngineer, newIntern];

// fs.writeFile("./Output/index.html", generateHTML(testArray), (error) => {
//     console.log(error);
// });

const startProgram = async () => {
    // Initial prompt to create manager on application start
    const init = await i.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter Manager's name:"
        },
        {
            type: "input",
            name: "managerID",
            message: "Enter Manager's employee ID:"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter Manager's email:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the Office Number:"
        }
    ])
    // Takes values from inital propmpt to create a new Manager and append it to the teamArray
    teamArray.push(new Manager(init.managerName, init.managerID, init.managerEmail, init.officeNumber));

    // Begins the prompt to add an Engineer, Intern or finish application
    const menu = await i.prompt([
        {
            type: "list",
            name: "menu",
            message: "Finish creating your team:",
            choices: ["- Add an Engineer", "- Add an Intern", "- Finish Team Building"]
        }
    ])

    // Checks if the user selected Add an Engineer from the menu prompt
    if (menu.menu === "- Add an Engineer"){
        console.log("adding an engineer!");
    }

    // Checks if the user selected Add an Intern from the menu prompt
    if (menu.menu === "- Add an Intern"){
        console.log("adding an intern!");
    }

    // Checks if the user selected Finish Team Building from the menu prompt
    if (menu.menu === "- Finish Team Building"){
        console.log("I am finished team building!");
    }

}

startProgram();



