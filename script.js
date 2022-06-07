var choices = ['rock', 'paper', 'scissor']
var user = 0
var computer = 0

    // do{
    //     var playerSelection = window.prompt("Enter Your Choice: 'Rock' 'Paper' 'Scissor' ").toLowerCase()
    //     if (choices.indexOf(playerSelection) !== -1){
    //         exit = true
    //     }
    //     else{
    //         exit = false
    //     }
    // }while(exit == false)   

function run(playerSelection){

    function computerSelection(){
        // let selection = Math.floor(Math.random()*3+1);
        let selection = choices[Math.floor(Math.random()* choices.length)]
        return selection
    }
    computerSelection()

    function result(playerSelection, computerSelection){
        console.log('Player Selection: ', playerSelection)
        console.log('Computer Selection: ', computerSelection)

        if(playerSelection===computerSelection){
            // console.log('Draw')
            document.getElementById('winOrLose').innerHTML = "It's Draw."
        }
        else if( playerSelection=='rock' && computerSelection=='paper'){
            // console.log('You Lose')
            computer += 1
            document.getElementById('winOrLose').innerHTML = "You Lose :)"
        }
        else if( playerSelection=='paper' && computerSelection=='scissor'){
            computer += 1
            document.getElementById('winOrLose').innerHTML = "You Lose :)"
        }
        else if( playerSelection=='scissor' && computerSelection=='rock'){
            computer += 1
            document.getElementById('winOrLose').innerHTML = "You Lose :)"
        }
        else{
            user += 1
            document.getElementById('winOrLose').innerHTML = "You Won !!!"
        }
    }
    result(playerSelection, computerSelection())
    console.log('Your Score:', user);
    console.log('Computer Score:', computer);
    
    // on the screen
    document.getElementById('userScore').innerHTML = user
    document.getElementById('computerScore').innerHTML = computer
     
}


var playerSelection;                        
document.getElementById('rock').addEventListener('click', rockFunc) 
document.getElementById('paper').addEventListener('click', paperFunc) 
document.getElementById('scissor').addEventListener('click', scissorFunc)

function rockFunc(){
    playerSelection = choices[0]
    run(playerSelection)
    console.log('You clicked Rock')
}
function paperFunc(){
    playerSelection = choices[1]
    run(playerSelection)
    console.log('You clicked Scissor')
}
function scissorFunc(){
    playerSelection = choices[2]
    run(playerSelection)
    console.log('You clicked Scissor')

}


