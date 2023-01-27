const generateHTML = require("./util/generateHtml");
const fs = require("fs");
const i = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamArray = [];

// fs.writeFile("./Output/index.html", generateHTML(testArray), (error) => {
//     console.log(error);
// });

 // Begins the prompt to add an Engineer, Intern or finish application
const displayMenu = async () => {
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
        // Prompt to gather engineer's information
        const newE = await i.prompt([
            {
                type: "input",
                name: "engName",
                message: "Enter Engineer's name:"
            },
            {
                type: "input",
                name: "engID",
                message: "Enter Engineer's employee ID:"
            },
            {
                type: "input",
                name: "engEmail",
                message: "Enter Engineer's email:"
            },
            {
                type: "input",
                name: "gitHub",
                message: "Enter the Engineer's GitHub Username:"
            }
        ]);
        // Takes values from newE propmpt to create a new Engineer and append it to the teamArray
        teamArray.push(new Engineer(newE.engName, newE.engID, newE.engEmail, newE.gitHub));

        // Recursive call to display menu options again
        displayMenu();
    }

    // Checks if the user selected Add an Intern from the menu prompt
    if (menu.menu === "- Add an Intern"){
        // Prompt to gather intern's information
        const newI = await i.prompt([
            {
                type: "input",
                name: "intName",
                message: "Enter Intern's name:"
            },
            {
                type: "input",
                name: "intID",
                message: "Enter Intern's employee ID:"
            },
            {
                type: "input",
                name: "intEmail",
                message: "Enter Intern's email:"
            },
            {
                type: "input",
                name: "school",
                message: "Enter the Intern's School"
            }
        ]);
        // Takes values from newI propmpt to create a new Intern and append it to the teamArray
        teamArray.push(new Intern(newI.intName, newI.intID, newI.intEmail, newI.school));

        // Recursive call to display menu options again
        displayMenu();
    }

    // Checks if the user selected Finish Team Building from the menu prompt
    if (menu.menu === "- Finish Team Building"){
        console.log(teamArray)
    }
    
}

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

    displayMenu();
}

startProgram();



