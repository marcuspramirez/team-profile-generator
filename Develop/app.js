const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const open = require('open');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

let members = [];

// first question
function newMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Choose role",
            choices: ["Manager", "Engineer", "Intern", "Done"]
        }
        // Using switch instead of if statements to execute funtion depending on role choice
    ]).then(answer => {
        switch (answer.role) {
            case 'Manager':
                addManager();
                break;

            case 'Engineer':
                addEngineer();
                break;

            case 'Intern':
                addIntern();
                break


            case 'Done':
                buildTeam();
                break;
        }

    }
    )
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the managers name?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What their ID number?',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is their email address?',
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is their office number?',
        }
    ]).then(userChoice => {
        const manager = new Manager(userChoice.managerName, userChoice.managerId, userChoice.managerEmail, userChoice.managerOfficeNumber)

        members.push(manager)

        newMember()
    })
}


function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name?',
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is their ID number?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is their email address?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is their GitHub name?',
        }


    ]).then(userChoice => {
        const engineer = new Engineer(userChoice.engineerName, userChoice.engineerId, userChoice.engineerEmail, userChoice.engineerGithub)

        members.push(engineer)

        newMember()
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?',
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is their ID number?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is their email address?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Where did they graduate?',
        }

    ]).then(userChoice => {
        const intern = new Intern(userChoice.internName, userChoice.internId, userChoice.internEmail, userChoice.internSchool)

        members.push(intern)

        newMember()
    })
}


function buildTeam(){
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(members), "utf-8");
    open(outputPath);
}


newMember()






// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
