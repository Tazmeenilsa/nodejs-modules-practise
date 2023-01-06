const chalk = require("chalk")
console.log(chalk.blueBright.underline("Hello \n"));
console.log(chalk.green.inverse("Success"))
console.log(chalk.red.inverse("failed"))

// email validation
var validator = require('validator');
const res=validator.isEmail('tazmeenilsa@gmail.com'); 
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res) )
