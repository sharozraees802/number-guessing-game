import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';

import gradient from 'gradient-string';
import figlet from "figlet";


const WelcomeScreen = () => {
    console.log(gradient('cyan', 'pink').multiline(figlet.textSync(`LastCode \n\Number Guessing Game  !\n`), {interpolation: 'hsv'}) + '\n');
   
  }

  
  WelcomeScreen();
type ansType = {
    userGuess: number
}


const computerNumber = Math.floor(Math.random() * 10)



const answers: ansType = await inquirer.prompt([
    {
        type:"number",
        name:"userGuess",
        message:"Write Your Guess b/w 1 to 10 : "
    }
])

const { userGuess } = answers

const answerCheckFlag = userGuess === computerNumber;

if (answerCheckFlag) {
    console.log("Yeah Your answer is correct \n You Win! 😂")
}
else{
    console.log("Better luck next Time 😒")
}

