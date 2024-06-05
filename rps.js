let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScore();

function computerplay(){
const randomnum= Math.random();
let computerMove='';
    if(randomnum >=0 && randomnum < 1/3){
    computerMove='rock';
    }else if(randomnum >= 1/3 && randomnum < 2/3){
        computerMove='paper';
    }else if(randomnum >= 2/3 && randomnum <= 1){
        computerMove='scissors';
    }
    return computerMove;

}
function playGame(playerMove){
const computerMove = computerplay();
let result='';
if(playerMove==='rock'){
    if(computerMove==='rock'){
    result='Tie';
    }else if(computerMove==='paper'){
    result='You Lose';
    }else{
        result='You Win';
            }

}
else if(playerMove==='scissors'){
    if(computerMove==='scissors'){
    result='Tie';
    }else if(computerMove==='rock'){
    result='You Lose';
    }else{
        result='You Win';
    }

}
else if(playerMove==='paper'){
    if(computerMove==='paper'){
            result='Tie';
        }else if(computerMove==='scissors'){
            result='You Lose';
        }else{
            result='You Win';
    }

}
if(result==='You Win'){
    score.wins+=1;
}else if(result==='You Lose'){
    score.losses+=1;
}else if(result==='Tie'){
    score.ties+=1;
}

document.querySelector('.js-result').innerHTML =`${result}.`;
document.querySelector('.js-move').innerHTML =`You  <img src="images/${playerMove}-emoji.png" class="move-img">   <img src="images/${computerMove}-emoji.png" class="move-img">  Computer `;
localStorage.setItem('score',JSON.stringify(score));
updateScore();
}
function updateScore(){
    document.querySelector('.js-score').innerHTML= `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}. `;

}
document.querySelector('.js-reset-button').addEventListener('click',()=>{
score.wins=0;
score.losses=0;
score.ties=0;
localStorage.removeItem('score');
updateScore();
document.querySelector('.js-result').innerHTML='You started New game !..';
document.querySelector('.js-move').innerHTML='Good luck..';
});
document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('paper');
});
document.querySelector('.js-scissor-button').addEventListener('click',()=>{
    playGame('scissors');
});
let isAutoPlaying=false;
let intervalid;
function autoPlay(){
    if(!isAutoPlaying){
        intervalid=setInterval(()=>{
            const playerMove=computerplay();
            playGame(playerMove);
        },1000);
        document.querySelector('.js-autoplay-button').innerHTML='Stop AutoPlay';
        isAutoPlaying=true;
    }else{
        clearInterval(intervalid);
        document.querySelector('.js-autoplay-button').innerHTML='Auto Play';
        isAutoPlaying=false;
    }
}
document.querySelector('.js-autoplay-button').addEventListener('click',()=>{
    autoPlay();
});