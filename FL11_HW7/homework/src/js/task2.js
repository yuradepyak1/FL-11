let play = confirm('Do you want to play a game?');

const initAttemptsAmount = 3;
const initLevelPrize = 100;
const initLevel = 1;
const initMax = 8;

const min = 0;
const decreasePrice = 2;
const increaseLevelPrice = 2;
const increaseRange = 4;

let totalPrize = 0;
let max = initMax;
let level = initLevel;
let levelPrize = initLevelPrize;

let attemptsAmount, pcNumber, userPrize, userNumber;


while(play) {
    pcNumber = Math.floor(Math.random() * (max - min + 1) + min);
    userPrize = levelPrize;
    console.log(pcNumber);

    for (attemptsAmount = initAttemptsAmount; attemptsAmount > 0; attemptsAmount--) {

        userNumber = +prompt(
            `Choose a rollete pocket number from ${min} to ${max}
            \nAttempts left: ${attemptsAmount}
            \nTotal prize: ${totalPrize}
            \nPossible prize to current attempt: ${userPrize}`, '0');

        if (userNumber === pcNumber) {
            totalPrize += userPrize;
            play = confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`);
            break;

        } else {
            userPrize /= decreasePrice;
        }
    }

    if (userNumber === pcNumber && play) {
        level ++;
        levelPrize *= increaseLevelPrice;
        max += increaseRange;

    } else if (userNumber === pcNumber && play === false) {
        alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
        play = confirm('Do you want to play again?');

    } else {
        totalPrize = 0;
        alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
        play = confirm('Do you want to play again?');

        max = initMax;
        level = initLevel;
        levelPrize = initLevelPrize;
    }
}

alert('You did not become a billionaire, but can.');