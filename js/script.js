var argMoveId, argPlayerMove,argComputerMove  ,computerMove, randomNumber,playerMove,playerInput, argButtonName, buttonTest, buttonRock, buttonPaper, buttonScissors ;



buttonPaper = document.getElementById('button-paper');
buttonRock = document.getElementById('button-rock');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked (argButtonName){
    clearMessages();
    console.log (argButtonName + '  został klikniety');
    


function getMoveName(argMoveId){
   if (argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3){
        return 'nozyce'
    } else {
        printMessage ('nie znam ruchu od Id : ', argModeId)
    }
}


function displayResult (argPlayerMove, argComputerMove){
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień'){
        printMessage('Wygrywasz');
        
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nozyce' ) {
        printMessage('Wygrywasz');
    } else if (argPlayerMove == 'nozyce' && argComputerMove == 'papier'){
        printMessage('Wygrywasz');
    }  else if (argComputerMove == argPlayerMove  ){
        printMessage('Remis !!!');
    }
     else {
        printMessage('Przegrywasz');
    }
         printMessage ('Zagram ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
playerMove = argButtonName;
console.log('Wpisana odpowiedź to: ' + playerMove);
displayResult(playerMove, computerMove);
//if (playerInput == '1') {
//    playerMove = 'kamień'
//} else if ( playerInput =='2') {
//    playerMove = 'paier'
//} else if (playerInput == '3'){
//    playerMove = 'nozyce'
//} else {
//    printMessage('zły wybór')
//}
//printMessage ('wybrałeś :' + playerInput);

}


buttonPaper.addEventListener('click', function(){ 
    buttonClicked('Papier')
});

buttonRock.addEventListener('click', function(){
    buttonClicked('Kamień')
});

buttonScissors.addEventListener('click', function(){
    buttonClicked('Nożyce')
});
