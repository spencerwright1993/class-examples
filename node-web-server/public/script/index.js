const bannerElement = document.querySelector('#banner');
const resetButtonElement = document.querySelector('#resetButton');
const gridButtonElements = document.querySelectorAll('.grid');
const audio = document.querySelector('#suhDude');
const audio1 = document.querySelector('#suhDude1');
const buttons = document.querySelector('#grid');
const bodyElement = document.querySelector('body');
let currentPlayersTurn = 'Suh';
let isGameOver = false;
let turnCount = 0;
bannerElement.textContent = `Current Player's Turn: ${currentPlayersTurn}`;

function playAudio() {
    audio.play();
}
 
function playAudio1() {
    audio1.play();
}




for(let i=0; i < gridButtonElements.length; i++) {
    const gridButtonElement = gridButtonElements[i];

    gridButtonElement.addEventListener('click', function(event) {
       // bodyElement.classList.remove('background-1');
        //bodyElement.classList.add('background-2');

        console.log('grid ' + (i + 1) + ' Clicked!');
        const element = event.target;
        const currentValue = element.textContent;

        if(currentValue !== '' || isGameOver){
            return;
        }
         turnCount++;

        if(currentPlayersTurn === 'Suh'){
            element.textContent = 'Suh';
            checkForWinner(currentPlayersTurn);
            currentPlayersTurn = 'Dude';
        }
        else{
            element.textContent = 'Dude'
            checkForWinner(currentPlayersTurn);
            currentPlayersTurn = 'Suh';
        }
        if(!isGameOver){
            bannerElement.textContent = `Current Player's Turn: ${currentPlayersTurn}`;
        }

        if(turnCount === 9) {
            isGameOver = true;
        }

    });
}

resetButtonElement.addEventListener('click', function(){
    //Clear all Suh Dudes.
    gridButtonElements.forEach((gridElement) => {
        gridElement.textContent= '';
    });
    isGameOver = false;
    currentPlayersTurn = 'Suh';
    turnCount = 0;
    bannerElement.textContent = `Current Player's turn: ${currentPlayersTurn}`;
});


function checkForWinner(player) {
    const grid1Value = gridButtonElements[0].textContent;
    const grid2Value = gridButtonElements[1].textContent;
    const grid3Value = gridButtonElements[2].textContent;
    const grid4Value = gridButtonElements[3].textContent;
    const grid5Value = gridButtonElements[4].textContent;
    const grid6Value = gridButtonElements[5].textContent;
    const grid7Value = gridButtonElements[6].textContent;
    const grid8Value = gridButtonElements[7].textContent;
    const grid9Value = gridButtonElements[8].textContent;

    

    if(grid1Value === player && grid2Value === player && grid3Value === player){
        isGameOver = true;
    }
    else if(grid4Value === player && grid5Value === player && grid6Value === player){
        isGameOver = true;
    }
    else if(grid7Value === player && grid8Value === player && grid9Value === player){
        isGameOver = true;
    }
    else if(grid1Value === player && grid4Value === player && grid7Value === player){
        isGameOver = true;
    }
    else if(grid2Value === player && grid5Value === player && grid8Value === player){
        isGameOver = true;
    }
    else if(grid3Value === player && grid6Value === player && grid9Value === player){
        isGameOver = true;
    }
    else if(grid1Value === player && grid5Value === player && grid9Value === player){
        isGameOver = true;
    }
    else if(grid3Value === player && grid5Value === player && grid7Value === player){
        isGameOver = true;
    }
    
    

    if(isGameOver) {
         bannerElement.textContent = `PLAYER ${player} Is Totally Lit Fam`;
    }
    else if(turnCount === 9) {
        isGameOver = true;
        bannerElement.textContent = 'Yall aint Vibin';
    }

}