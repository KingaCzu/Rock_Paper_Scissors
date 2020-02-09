console.log ("Welcome to Rock, Paper and Scissors!");
const readline = require ("readline").createInterface({
    input: process.stdin,
    output: process.stout
});



function randomChoice (){
    let index = Math.floor(Math.random() * 3);
    const array = ["rock", "paper", "scissors"];
    return array [index]
}

function finalResult (user, computer){
    if ((user === "rock" && computer === "scissors" )||
    (user === "paper" && computer === "rock")||
    (user === "scissors" && computer === "paper")){
        console.log ("You won")
    }
    else if ((computer === "rock" && user === "scissors")||
    (computer === "paper" && user === "rock")||
    (computer === "scissors" && user === "paper")){
        console.log ("You lost")
    }
    else {
        console.log ("It is a draw");
    }
}

function handleUserResponse (response) {
    let userChoice
    let lowercaseresponse = response.toLowerCase()
    if (lowercaseresponse === "rock" || lowercaseresponse === "scissors" || lowercaseresponse === "paper") 
    {
        console.log ("You have chosen " + lowercaseresponse);
        userChoice = lowercaseresponse
        let computerChoice = randomChoice ();
        console.log ("Computer has chosen " + computerChoice);
        finalResult (userChoice, computerChoice);
    }
    else {
        console.log ("error")
    }

   readline.close();

}

readline.question ("Please choose either rock, paper or scissors!\n", handleUserResponse)
