let chalk = require('chalk')
let input = require('readline-sync')
// let chalk = require('chalk')

const correct = chalk.green
const wrong = chalk.red
const highlight = chalk.blue

let score =0
let userName = input.question("Who are you? ")
console.log(highlight("Welcome %s to the Cricket quiz!!!!"),userName)
console.log('------------------------')


let highScore = [{
  name:"Ranjan",
  score:4
},
{
  name:'Uday',
  score:2
}

]

let questions = [
  {
    question:"Who scored the first double century?",
    option:['Sachin Tendulkar',
    'Belinda Clark',
  'Virendra Sehwag']
    ,
    answer:2
  },
  {
    question:"Who has most test wicket", 
    option:['M Muralitharan',
    'SK Warne',
    'A Kumble']
    ,
    answer:1
  },
  {
    question:'When did India won its first world cup?',
    option:['1983',
    '1982',
    '1980']
    ,
    answer:1
  },
  {
    question:'How many times India have won the odi worldcup?',
    option:['4',
    '2',
    '1']
    ,
    answer:2
  }
]


function verify(question,option,answer){
  var index = input.keyInSelect(option,question,{cancel:false})+1
   if(index == answer){
    score+=1
    console.log(correct("Correct!!!"))
  }else{
    console.log(wrong("Wrong!!!"))
  }
  console.log(highlight("Current Score: %s"),score)
  console.log("------------------------")
}




for(i=0;i<questions.length;i++){
  verify(questions[i].question,questions[i].option,questions[i].answer)
}


console.log(chalk.yellow("Final Score: %s "),score)
console.log("------------------------")
for(i=0;i<highScore.length;i++){
  if(score>highScore[i].score){
    flag = true
  }
}

if(flag){
  console.log(highlight(`Yay!!! you have beaten a highscore \nSend screenshot to update leaderboard`))
}