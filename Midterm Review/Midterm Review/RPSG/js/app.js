let scoreDiv = document.getElementById("score");
let score = 0;
let resultDisplay = document.getElementById("resultDisplay");
function rockPaperScissorsGuard(playerChoice, playerString)
{
    // if the player chose guard, lose .5 + update boxes
    if (playerChoice === 3)
    {   score -= 0.5;
        scoreDiv.innerHTML = "Score: " + score;
        resultDisplay.innerHTML = "You chose: " + playerString + "! Good job!";
    }
    // If the player made an RPS move, generate computer's move
    {
        let computerChoice = Math.floor(Math.random() * 3);

        // computer = rock
        if (computerChoice === 0)
        {
            //player = paper, gain point, update text
            if (playerChoice === 1)
            {
                score++;
                scoreDiv.innerHTML = "Score: " + score;
                resultDisplay.innerHTML = "You chose: " + playerString + " and the robot chose rock! Winner!";
            }
            //player = scissors, lose point, update text
            else if (playerChoice === 2)
            {
                // Lose a point and update text
                score--;
                scoreDiv.innerHTML = "Score: " + score;
                resultDisplay.innerHTML = "You chose: " + playerString + " and the robot chose rock! Try again?";
            }
        }
        //computer chose paper
        else if (computerChoice === 1)
        {
            //player = scissors, gain point, update text
            if (playerChoice === 2)
            {
                score++;
                scoreDiv.innerHTML = "Score: " + score;
                resultDisplay.innerHTML = "You chose: " + playerString + " and the robot chose paper! Winner!";
            }
            //player = rock, lose point, update text
            else if (playerChoice === 0)
            {
                score--;
                scoreDiv.innerHTML = "Score: " + score;
                resultDisplay.innerHTML = "You chose: " + playerString + " and the robot chose paper! Try again?";
            }
        }
        //computer = scissors
        else if (computerChoice === 2)
        {
            //player = rock, gain point, change text
            if (playerChoice === 0)
            {
                score++;
                scoreDiv.innerHTML = "Score: " + score;
                resultDisplay.innerHTML = "You chose: " + playerString + " and the robot chose scissors! Winner!";
            }
            //player = paper, lose point, change text
            else if (playerChoice === 1)
            {
                score--;
                scoreDiv.innerHTML = "Score: " + score;
                resultDisplay.innerHTML = "You chose: " + playerString + " and the robot chose scissors! Try again?";
            }
        }
    }
}