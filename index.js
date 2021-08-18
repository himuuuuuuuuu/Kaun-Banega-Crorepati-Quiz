const chalk = require('chalk');
var readlineSync = require('readline-sync');
var play = require("./play")
var questions = require("./questions")
var score = 0

function quiz(){
console.log(chalk.black.bold.bgGreen.underline("KAUN BANEGA CROREPATI QUIZ 2021 EDITION\n\n"))




while(true){
var userName = readlineSync.question(chalk.yellowBright.bold("\nWelcome,Enter your name to proceed: "));
if(userName !== ""){
      break
    }
    else{
      console.log(chalk.redBright.bold("\nWhoops Sir! :( Try again \n"));
    }
  }



console.log(chalk.greenBright.bold("\nWelcome "  + (userName) + "!" + " you are all set to begin the game! GOOD LUCK!\n"))

for(i=0; i<questions.length; i++){
    var currentQuestion = questions[i]
    
    var userQuestionStatus = play(currentQuestion.question,currentQuestion.answer[0])

    if(userQuestionStatus === true){
      
     
      console.log(chalk.greenBright.bold("\n\nWell done  your answer is absolutely correct!\n"))
        
        

        score = score + 1
        console.log("\nYour score is: " + score)
    }
  

    else{
      
      console.log(chalk.red.bold("\n\nOops,your answer is incorrect!"))

      
            console.log(chalk.greenBright.underline.bold.bgBlack("\n\nCorrect answer was", currentQuestion.answer[1]))

            
        console.log("\nYour score is: " + score)
    }
    
    console.log("\n-------------------------------------\n")

}

console.log("\nYour score is: " + score + "/14")




console.log(chalk.redBright.bgBlack.underline.bold("\n\n Hope you enjoyed ...For playing more quiz apps like this,Do follow me on twitter and instagram  \n\n"))


var twitter = chalk.blue.bold.underline("https://twitter.com/SamyakShah_18")

var insta = chalk.blue.bold.underline("https://www.instagram.com/samyakshah_18/")

console.log(chalk.yellowBright.bgBlack.bold("If you want to give any suggestions or experiencing any bugs in this quiz you can DM me on : " + "\n\n" + twitter + 
"\n\n" +  insta))

}


quiz()
