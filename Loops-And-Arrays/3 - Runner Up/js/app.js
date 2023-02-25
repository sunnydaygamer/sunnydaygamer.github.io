let Winner = document.getElementById("Winner");

let Runnerup = document.getElementById("Runnerup");

let numbers = ["7.99", "9.03", "10.5"];

let statement = "Winner = " + numbers[0]
    Winner.innerHTML = statement;

let statement1 = "Runnerups = " + numbers[1] + " & " + numbers[2]
Runnerup.innerHTML = statement1;