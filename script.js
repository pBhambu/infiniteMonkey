let targetPhrase = "";
let probability = 0;
let isRunning = false;
let attemptCount = 0;

// Character set for random generation (lowercase letters, uppercase, space, and common punctuation)
const CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";

// Calculate probability when phrase is entered
function getProb() {
    const input = document.getElementById("phrase").value;
    targetPhrase = input;
    
    if (targetPhrase.length === 0) {
        document.getElementById('proba').value = "";
        return;
    }
    
    // Calculate probability based on character set size and phrase length
    const charSetSize = CHARACTERS.length;
    probability = Math.pow(charSetSize, targetPhrase.length);
    
    const probaOutput = document.getElementById('proba');
    probaOutput.value = `1 in ${probability.toExponential(2)}`;
    
    console.log(`Target: "${targetPhrase}", Probability: 1/${probability}`);
}

// Generate a random character from the character set
function getRandomChar() {
    return CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
}

// Generate a random string of the same length as target
function generateRandomString(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += getRandomChar();
    }
    return result;
}

// Main simulation function
function runSimulation() {
    if (!targetPhrase || targetPhrase.length === 0) {
        alert("Please enter a target phrase first!");
        return;
    }
    
    if (isRunning) {
        // Stop simulation
        isRunning = false;
        document.getElementById('start').textContent = "Start Simulation";
        document.getElementById('phrase').disabled = false;
        return;
    }
    
    // Start simulation
    isRunning = true;
    attemptCount = 0;
    document.getElementById('start').textContent = "Stop Simulation";
    document.getElementById('phrase').disabled = true;
    document.getElementById('used').value = "0";
    
    const outputDiv = document.getElementById('output');
    outputDiv.classList.add('active');
    outputDiv.innerHTML = "<strong>Simulation started...</strong><br><br>";
    
    // Run simulation in chunks to avoid blocking UI
    simulateChunk();
}

function simulateChunk() {
    if (!isRunning) return;
    
    const CHUNK_SIZE = 1000; // Process 1000 attempts per chunk
    const targetLength = targetPhrase.length;
    
    for (let i = 0; i < CHUNK_SIZE; i++) {
        attemptCount++;
        const randomString = generateRandomString(targetLength);
        
        // Check if we found a match
        if (randomString === targetPhrase) {
            isRunning = false;
            document.getElementById('start').textContent = "Start Simulation";
            document.getElementById('phrase').disabled = false;
            document.getElementById('used').value = attemptCount.toLocaleString();
            
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = `
                <strong>SUCCESS!</strong><br><br>
                <strong>Target phrase:</strong> "${targetPhrase}"<br>
                <strong>Final attempt:</strong> "${randomString}"<br>
                <strong>Total attempts:</strong> ${attemptCount.toLocaleString()}<br>
                <strong>Characters typed:</strong> ${(attemptCount * targetLength).toLocaleString()}
            `;
            return;
        }
        
        // Update UI every 10000 attempts
        if (attemptCount % 10000 === 0) {
            document.getElementById('used').value = (attemptCount * targetLength).toLocaleString();
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = `
                <strong>Current attempt:</strong> ${attemptCount.toLocaleString()}<br>
                <strong>Last generated:</strong> "${randomString}"<br>
                <strong>Target phrase:</strong> "${targetPhrase}"<br>
                <strong>Characters typed:</strong> ${(attemptCount * targetLength).toLocaleString()}
            `;
        }
    }
    
    // Update counter
    document.getElementById('used').value = (attemptCount * targetLength).toLocaleString();
    
    // Continue simulation
    setTimeout(simulateChunk, 0);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start');
    const phraseInput = document.getElementById('phrase');
    
    startButton.addEventListener('click', runSimulation);
    
    phraseInput.addEventListener('input', function() {
        getProb();
    });
    
    // Initialize
    document.getElementById('used').value = "0";
});
