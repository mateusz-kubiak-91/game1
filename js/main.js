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
    compare(0)
});

paperBtn.addEventListener('click', () => {
    rockBtn.classList.remove('active');
    paperBtn.classList.add('active');
    scissorsBtn.classList.remove('active');
    lizardBtn.classList.remove('active');
    spockBtn.classList.remove('active');
    compare(1)
});

scissorsBtn.addEventListener('click', () => {
    rockBtn.classList.remove('active');
    paperBtn.classList.remove('active');
    scissorsBtn.classList.add('active');
    lizardBtn.classList.remove('active');
    spockBtn.classList.remove('active');
    compare(2)
});

lizardBtn.addEventListener('click', () => {
    rockBtn.classList.remove('active');
    paperBtn.classList.remove('active');
    scissorsBtn.classList.remove('active');
    lizardBtn.classList.add('active');
    spockBtn.classList.remove('active');
    compare(3)
});

spockBtn.addEventListener('click', () => {
    rockBtn.classList.remove('active');
    paperBtn.classList.remove('active');
    scissorsBtn.classList.remove('active');
    lizardBtn.classList.remove('active');
    spockBtn.classList.add('active');
    compare(4)
});


function compare(playerChoice) {
    const computerChoice = Math.floor(Math.random() * Object.keys(choices).length);
    const playerChoiceName = choices[playerChoice];
    const computerChoiceName = choices[computerChoice];
    const result = document.querySelector('.result');
    let resultText = 'Player win';

    result.classList.remove('hide');
    result.innerHTML = `Computer choice: ${computerChoiceName}<br>`;
    result.innerHTML += `Player choice: ${playerChoiceName}<br>`;

    if (playerChoice == computerChoice) {
        resultText = 'Draw'
    } else if (playerChoice == 0 && (computerChoice == 2 || computerChoice == 3)) {
        // kamień > jaszczurka, nożyce
        resultText = 'Player win'
    } else if (playerChoice == 1 && (computerChoice == 0 || computerChoice == 4)) {
        // papier > kamień, spock
        resultText = 'Player win'
    } else if (playerChoice == 2 && (computerChoice == 1 || computerChoice == 3)) {
        // nożyczki > papier, jaszczurka
        resultText = 'Player win'
    } else if (playerChoice == 3 && (computerChoice == 1 || computerChoice == 4)) {
        // jaszczurka > spock, papier
        resultText = 'Player win'
    } else if (playerChoice == 4 && (computerChoice == 0 || computerChoice == 2)) {
        // spock > nozyce, kamień
        resultText = 'Player win'
    } else {
        resultText = 'Computer win'
    }

    result.innerHTML += resultText
}
