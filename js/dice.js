var score ;
var activePlayer ;
var current_score;
begin();

document.querySelector('#roll').addEventListener('click' , function() {
    var dice = Math.floor( Math.random() * 6 ) +1;
    
    document.querySelector("#dice").style.display='block';
    var diceImage = document.querySelector("#dice");
    diceImage.src = "imgs/dice-" + dice + ".png";
    if(score[activePlayer-1] >= 100){
        score[activePlayer-1] +=0 ;
        document.querySelector('#score-' + activePlayer).textContent=score[activePlayer-1];
        document.querySelector('#current-' +activePlayer).textContent = '0';
        document.querySelector("#dice").style.display='none';

    }
    else {
        if(dice > 1){
        
        
            current_score += dice ;
            document.querySelector('#current-' +activePlayer).textContent = current_score ;
              
        }
        else {
            
            next();   
            
        }
        
    }

    
}
)
document.querySelector('#hold').addEventListener('click' , function() {
    if(score[activePlayer-1] >= 100){
        score[activePlayer-1] +=0 ;
        document.querySelector('#score-' + activePlayer).textContent=score[activePlayer-1];
        document.querySelector('#current-' +activePlayer).textContent = '0';

    }
    else {score[activePlayer-1] += current_score;
        document.querySelector('#score-' + activePlayer).textContent=score[activePlayer-1];
        if(score[activePlayer-1] >= 100){
            document.querySelector("#dice").style.display='none';
            
            document.querySelector('#name-'+activePlayer).textContent='WINNER';
            
            document.querySelector('#player-'+activePlayer).classList.add('winner');
            document.querySelector('#player-'+activePlayer).classList.remove('active');
            score[activePlayer-1] += 0; 
            document.querySelector('#score-' + activePlayer).textContent=score[activePlayer-1];
            document.querySelector('#current-' +activePlayer).textContent = '0';
            
    
    
            
        }
        else {
            next();
        }
    }

    
})

document.querySelector('#new-game').addEventListener('click' , function() {
    begin();
    document.querySelector('#name-1').textContent = "PLAYER 1";
    document.querySelector('#name-2').textContent = "PLAYER 2";
    document.querySelector('#player-1').classList.remove('winner');
    document.querySelector('#player-2').classList.remove('winner');
    document.querySelector('#player-1').classList.remove('active');
    document.querySelector('#player-2').classList.remove('active');
    document.querySelector('#player-1').classList.add('active');





})


function next(){
     if (activePlayer === 1){
    activePlayer=2;
}
else {
    activePlayer=1;
}
current_score= 0;


document.querySelector('#current-1').textContent = '0';
document.querySelector('#current-2').textContent = '0';
document.querySelector('.player-1').classList.toggle('active');
document.querySelector('.player-2').classList.toggle('active');
}

function begin() {
score=[0,0];

activePlayer= 1;
current_score =0 ;


document.querySelector("#dice").style.display='none';
document.querySelector('#current-1').textContent = '0';
document.querySelector('#current-2').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#score-2').textContent = '0';

}



