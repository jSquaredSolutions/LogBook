var inquirer = require('inquirer');
var fs = require('fs');
var fileName = './LogBook.json';
var file = require(fileName);

function myFunc() {
  inquirer.prompt([{
      type: 'input',
      name: 'EntryDate',
      message: "ENTRY: ",
      validate: function (value) {
        file.push({
          "Entry": value,
          "Date1": Date.now(),
          "Date2": Date().toString() 
        });
        fs.writeFile(fileName, JSON.stringify(file), function (err) {
          if (err) return console.log(err);
        });
        return true;
      }
    }])
    .then(answers => {
      myFunc();
    })
    .catch(error => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}
myFunc();