const choices = {
    0: 'rock',
    1: 'paper',
    2: 'scrissors',
    3: 'lizard',
    4: 'spock'
};

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const lizardBtn = document.querySelector('.lizardBtn');
const spockBtn = document.querySelector('.spockBtn');

rockBtn.addEventListener('click', () => {
    rockBtn.classList.add('active');
    paperBtn.classList.remove('active');
    scissorsBtn.classList.remove('active');
    lizardBtn.classList.remove('active');
    spockBtn.classList.remove('active');
})

paperBtn.addEventListener('click', () => {
    rockBtn.classList.remove('active');
    paperBtn.classList.add('active');
    scissorsBtn.classList.remove('active');
    lizardBtn.classList.remove('active');
    spockBtn.classList.remove('active');
})

scissorsBtn.addEventListener('click', () => {
    rockBtn.classList.remove('active');
    paperBtn.classList.remove('active');
    scissorsBtn.classList.add('active');
    lizardBtn.classList.remove('active');
    spockBtn.classList.remove('active');
})

lizardBtn.addEventListener('click', () => {
    rockBtn.classList.remove('active');
    paperBtn.classList.remove('active');
    scissorsBtn.classList.remove('active');
    lizardBtn.classList.add('active');
    spockBtn.classList.remove('active');
})

spockBtn.addEventListener('click', () => {
    rockBtn.classList.remove('active');
    paperBtn.classList.remove('active');
    scissorsBtn.classList.remove('active');
    lizardBtn.classList.remove('active');
    spockBtn.classList.add('active');
})

function computerChoice() {
    const randNum = Math.floor(Math.random() * Object.keys(choices).length);
    const compChoiceDiv = document.createElement('div');
    compChoiceDiv.innerText = `Computer choice: ${choices[randNum]}`
    // TODO: Player choice VS Computer Choice (icons)
}

function comparision(playerChoice, cmpChoice) {
    if (playerChoice == cmpChoice) {
        console.log('Remis')
    } else if (playerChoice == 0 && cmpChoice == 1) {
        // ...
        // build next positions
    }
}
