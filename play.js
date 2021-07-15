var readlineSync = require('readline-sync');
const chalk = require('chalk');

function play(question,answer){
 
// Wait for user's response.
    
var userResponse = readlineSync.question(chalk.cyanBright.bold(question.toUpperCase()));

if(userResponse.toUpperCase() === answer)
{
  return true
}
else{
  return false
}

}

module.exports = play
