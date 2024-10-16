function getAttributeValueById(id) {
    let value = parseFloat(document.getElementById(id).value);
    return isNaN(value) ? null : value;
}

function calculateTimeToDeplete(health, armor, dps) {
    const timeToDepleteArmor = armor / (dps * 0.5); 
    const timeToDepleteHealth = health / dps;       
    return timeToDepleteArmor + timeToDepleteHealth;
}

function formatTime(time) {
    return Number.isInteger(time) ? time : time.toFixed(1);
}

function duel() {
    
    const health1 = getAttributeValueById("p1-health");
    const armor1 = getAttributeValueById("p1-armor");
    const dps1 = getAttributeValueById("p1-attack");

    const health2 = getAttributeValueById("p2-health");
    const armor2 = getAttributeValueById("p2-armor");
    const dps2 = getAttributeValueById("p2-attack");

    
    if (health1 === null || armor1 === null || dps1 === null || health2 === null || armor2 === null || dps2 === null) {
        alert("Please fill out all fields before continuing.");
        return;
    }

    
    const timeToDefeatPlayer1 = calculateTimeToDeplete(health1, armor1, dps2);
    const timeToDefeatPlayer2 = calculateTimeToDeplete(health2, armor2, dps1);

    
    if (Math.abs(timeToDefeatPlayer1 - timeToDefeatPlayer2) <= 0.1) {
        alert("It should be a draw!");
    } else if (timeToDefeatPlayer1 < timeToDefeatPlayer2) {
        alert(`Player 2 will win in ${formatTime(timeToDefeatPlayer1)} seconds!`);
    } else {
        alert(`Player 1 will win in ${formatTime(timeToDefeatPlayer2)} seconds!`);
    }
}
