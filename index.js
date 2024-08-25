function rollDice(sides) { //Roll function
    return Math.floor(Math.random() * sides) + 1; // +1 = Number starting from 1
}

document.getElementById('rollButton').addEventListener('click', function() { //Function names
    const diceType = document.getElementById('diceType').value; //D6 or D10
    const result = rollDice(diceType); //Roll button
    document.getElementById('result').textContent = `Answer: ${result}`; //Answer
});