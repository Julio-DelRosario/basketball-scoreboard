let countHome = 0
let countGuest = 0
let homeScore = document.getElementById('score-home')
let guestScore = document.getElementById('score-guest')

let countFoulHome = 0
let countFoulGuest = 0
let foulHome = document.getElementById('foul-home')
let foulGuest = document.getElementById('foul-guest')

const timerElement = document.getElementById('timer')
const startButton = document.getElementById('start')
let duration = 15 * 60
let timerInterval

function incrementHome(value){
    countHome += value
    homeScore.textContent = countHome
}
function incrementGuest(value){
    countGuest += value
    guestScore.textContent = countGuest
}

function incrementFoulHome(){
    countFoulHome += 1
    foulHome.textContent = countFoulHome
}
function incrementFoulGuest(){
    countFoulGuest += 1
    foulGuest.textContent = countFoulGuest
}

function updateTimer() {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    duration--;

    if (duration < 0) {
        clearInterval(timerInterval);
    }
}

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    timerInterval = setInterval(updateTimer, 1000);
}

// Add event listener to start button
startButton.addEventListener('click', startTimer);