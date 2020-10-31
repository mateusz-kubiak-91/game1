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
