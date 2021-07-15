const chalk = require('chalk');
var readlineSync = require('readline-sync');
var play = require("./play")
var questions = require("./questions")


function quiz(){
console.log(chalk.black.bold.bgGreen.underline("KAUN BANEGA CROREPATI QUIZ 2021 EDITION\n\n"))

console.log(chalk.greenBright.bold.bgRed.underline("Game Rules:\n"))
console.log(chalk.yellowBright.bold("There will be total 14 questions\nFor every correct answer,Your account balance will be increased with Levelwise Grading Rupees...\nFor Incorrect answer,You are OUT of the Game but you will still collect rupees which you won according to number of answers you gave right!\n\n You have to give your correct ALTERNATIVE only(No need to write complete answer)\n\n Once started the game,You cannot quit in between!"))

console.log(chalk.redBright.bold.bgBlack.underline("\nDon't forget to answer all the questions honestly to have more fun and amazing experience...We wish you Good luck from Team KBC!"))

while(true){
var userName = readlineSync.question(chalk.yellowBright.bold("\nWelcome Sir,Enter your name to proceed: "));
if(userName !== ""){
      break
    }
    else{
      console.log(chalk.redBright.bold("\nWhoops Sir! :( Try again \n"));
    }
  }



console.log(chalk.greenBright.bold("\nWelcome Sir "  + (userName) + "!" + " you are all set to begin the game! GOOD LUCK!\n"))

for(i=0; i<questions.length; i++){
    var currentQuestion = questions[i]
    
    var userQuestionStatus = play(currentQuestion.question,currentQuestion.answer[0])

    if(userQuestionStatus === true){
      
     
      console.log(chalk.greenBright.bold("\n\nWell done Sir your answer is absolutely correct!\n"))
        
        console.log(chalk.yellowBright.bgRedBright.bold(currentQuestion.amount))
    }
  

    else{
      
      console.log(chalk.red.bold("\n\nOops Sir,your answer is incorrect!"))

      
            console.log(chalk.greenBright.underline.bold.bgBlack("\n\nCurrect answer was", currentQuestion.answer[1]))

            break;

    }
    
    console.log("\n-------------------------------------\n")

}






console.log(chalk.redBright.bgBlack.underline.bold("\n\n Hope you enjoyed Sir...For playing more quiz apps like this,Do follow me on twitter and instagram  \n\n"))


var twitter = chalk.blue.bold.underline("https://twitter.com/SamyakShah_18")

var insta = chalk.blue.bold.underline("https://www.instagram.com/samyakshah_18/")

console.log(chalk.yellowBright.bgBlack.bold("If you want to give any suggestions or experiencing any bugs in this quiz you can DM me on : " + "\n\n" + twitter + 
"\n\n" +  insta))

}


quiz()
