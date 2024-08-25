function rollDice(sides) { //Roll function
    return Math.floor(Math.random() * sides) + 1; // +1 = Number starting from 1
}

document.getElementById('Button').addEventListener('click', function() { //Roll Function 
    const diceType = document.getElementById('Type').value; //D6 or D10
    const result = rollDice(diceType); //Roll + Answer
    document.getElementById('result').textContent = `Answer: ${result}`; //Answer:
});