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

console.log("\nYour final score is: " + score + "/14")

console.log("\nCheck out the current high scores: ")

var arrays = ["Soham: 10 ","Riya: 10", "Priyanka: 10","Akanksha: 10"]
 

 for (let z=0; z<arrays.length; z++){
   console.log(arrays[z])
 }

 if (score > 10){
   console.log("\nCongratulations " + userName +  " You have beaten the high score.Send me a screenshot so that I will update your new best record")
 }else{
   console.log("Oops,you failed to beat the highscore")
 }


console.log(chalk.redBright.bgBlack.underline.bold("\n\n Hope you enjoyed ...For playing more quiz apps like this,Do follow me on twitter"))


var twitter = chalk.blue.bold.underline("https://twitter.com/home")

console.log(chalk.yellowBright.bgBlack.bold("If you want to give any suggestions or experiencing any bugs in this quiz you can DM me on : " + "\n\n" + twitter 
))

}


quiz()
