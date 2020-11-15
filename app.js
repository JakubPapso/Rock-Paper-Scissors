//Accesing elements
const selectRock = document.querySelector('#rock');
const selectPaper = document.querySelector('#paper');
const selectScissors = document.querySelector('#scissors');
const leftScore = document.querySelector('#left-score');
const rightScore = document.querySelector('#right-score');
const leftChoose = document.querySelector('#left-choose');
const rightChoose = document.querySelector('#rigth-choose');
const leftBackground = document.querySelector('#left');
const rightBackground = document.querySelector('#right');
const leftIcon = document.querySelector('#left-new-chosen');
const rightIcon = document.querySelector('#right-new-chosen');
//Varibles
const options = ['far fa-hand-rock', 'far fa-hand-paper', 'far fa-hand-scissors'];
//EventListeners
selectRock.addEventListener('click', function () { choose(options[0]); compChoose(); result() });
selectPaper.addEventListener('click', function () { choose(options[1]); compChoose(); result() });
selectScissors.addEventListener('click', function () { choose(options[2]); compChoose(); result() });
//Functions
function choose(chosen) {
    rightChoose.innerHTML = '';
    rightIcon.className = chosen;

}
function compChoose() {
    leftChoose.innerHTML = '';
    leftIcon.className = options[Math.floor(Math.random() * options.length)];
}
function result() {
    if (rightIcon.className === leftIcon.className) {
        leftIcon.style.fontSize = '120px';
        rightIcon.style.fontSize = '120px';
        return;
    }
    //Lose
    else if (leftIcon.className === options[0] && rightIcon.className === options[1]) {
        rightIcon.style.fontSize = '130px';
        leftIcon.style.fontSize = '110px';
        return rightScore.innerHTML = (parseInt(rightScore.innerHTML) + 1).toString();
    } else if (leftIcon.className === options[1] && rightIcon.className === options[2]) {
        rightIcon.style.fontSize = '130px';
        leftIcon.style.fontSize = '110px';
        return rightScore.innerHTML = (parseInt(rightScore.innerHTML) + 1).toString();
    } else if (leftIcon.className === options[2] && rightIcon.className === options[0]) {
        rightIcon.style.fontSize = '130px';
        leftIcon.style.fontSize = '110px';
        return rightScore.innerHTML = (parseInt(rightScore.innerHTML) + 1).toString();
    }
    //Win
    else if (rightIcon.className === options[0] && leftIcon.className === options[1]) {
        leftIcon.style.fontSize = '130px';
        rightIcon.style.fontSize = '110px';
        return leftScore.innerHTML = (parseInt(leftScore.innerHTML) + 1).toString();
    } else if (rightIcon.className === options[1] && leftIcon.className === options[2]) {
        leftIcon.style.fontSize = '130px';
        rightIcon.style.fontSize = '110px';
        return leftScore.innerHTML = (parseInt(leftScore.innerHTML) + 1).toString();
    } else if (rightIcon.className === options[2] && leftIcon.className === options[0]) {
        leftIcon.style.fontSize = '130px';
        rightIcon.style.fontSize = '110px';
        return leftScore.innerHTML = (parseInt(leftScore.innerHTML) + 1).toString();
    }
}
