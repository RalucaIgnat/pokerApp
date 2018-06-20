const pokerTable = document.querySelectorAll('.poker-table');
const chooseCards = document.querySelectorAll('.choose-cards');
const buttonNewHand = document.getElementById('new-hand');

let firstPlayer1 = document.querySelector('.firstPlayer1');
let firstPlayer2 = document.querySelector('.firstPlayer2');
let secondPlayer1 = document.querySelector('.secondPlayer1');
let secondPlayer2 = document.querySelector('.secondPlayer2');
let thirdPlayer1 = document.querySelector('.thirdPlayer1');
let thirdPlayer2 = document.querySelector('.thirdPlayer2');
let fourthPlayer1 = document.querySelector('.fourthPlayer1');
let fourthPlayer2 = document.querySelector('.fourthPlayer2');
let fifthPlayer1 = document.querySelector('.fifthPlayer1');
let fifthPlayer2 = document.querySelector('.fifthPlayer2');
let sixthPlayer1 = document.querySelector('.sixthPlayer1');
let sixthPlayer2 = document.querySelector('.sixthPlayer2');
let board1 = document.querySelector('.board1');
let board2 = document.querySelector('.board2');
let board3 = document.querySelector('.board3');
let board4 = document.querySelector('.board4');
let board5 = document.querySelector('.board5');


activate(firstPlayer1);

buttonNewHand.addEventListener('click', function(){
  resetDeck();
  resetCardList();
  deactivateAll();
  activate(firstPlayer1);
});

pokerTable[0].addEventListener('click', function(e){

    if (e.target.parentElement === firstPlayer1){
      removeOnClick(firstPlayer1);
      deactivateAll();
      activate(firstPlayer1);
    }
    if (e.target.parentElement === firstPlayer2){
      removeOnClick(firstPlayer2);
      deactivateAll();
      activate(firstPlayer2);
    }
    if (e.target.parentElement === secondPlayer1){
      removeOnClick(secondPlayer1);
      deactivateAll();
      activate(secondPlayer1);
    }
    if (e.target.parentElement === secondPlayer2){
      removeOnClick(secondPlayer2);
      deactivateAll();
      activate(secondPlayer2);
    }
    if (e.target.parentElement === thirdPlayer1){
      removeOnClick(thirdPlayer1);
      deactivateAll();
      activate(thirdPlayer1);
    }
    if (e.target.parentElement === thirdPlayer2){
      removeOnClick(thirdPlayer2);
      deactivateAll();
      activate(thirdPlayer2);
    }
    if (e.target.parentElement === fourthPlayer1){
      removeOnClick(fourthPlayer1);
      deactivateAll();
      activate(fourthPlayer1);
    }
    if (e.target.parentElement === fourthPlayer2){
      removeOnClick(fourthPlayer2);
      deactivateAll();
      activate(fourthPlayer2);
    }
    if (e.target.parentElement === fifthPlayer1){
      removeOnClick(fifthPlayer1);
      deactivateAll();
      activate(fifthPlayer1);
    }
    if (e.target.parentElement === fifthPlayer2){
      removeOnClick(fifthPlayer2);
      deactivateAll();
      activate(fifthPlayer2);
    }
    if (e.target.parentElement === sixthPlayer1){
      removeOnClick(sixthPlayer1);
      deactivateAll();
      activate(sixthPlayer1);
    }
    if (e.target.parentElement === sixthPlayer2){
      removeOnClick(sixthPlayer2);
      deactivateAll();
      activate(sixthPlayer2);
    }
    if (e.target.parentElement === board1){
      removeOnClick(board1);
      deactivateAll();
      activate(board1);
    }
    if (e.target.parentElement === board2){
      removeOnClick(board2);
      deactivateAll();
      activate(board2);
    }
    if (e.target.parentElement === board3){
      removeOnClick(board3);
      deactivateAll();
      activate(board3);
    }
    if (e.target.parentElement === board4){
      removeOnClick(board4);
      deactivateAll();
      activate(board4);
    }
    if (e.target.parentElement === board5){
      removeOnClick(board5);
      deactivateAll();
      activate(board5);
    }
});


chooseCards[0].addEventListener('click',function(e){

  var selectedCard = findActivatedCard();
  if (selectedCard != 'not activated'){
    if (e.target.className === 'hearts' || e.target.className === 'spades' || e.target.className === 'diamonds' || e.target.className === 'clubs'){
    var id = e.target.id;
    var cls = e.target.className;
    var storedItem = storeListItem(id,cls);
    changeType(selectedCard, id, cls);
      if (beforeId === 'none' && beforeClass === 'none'){
        storedItem.classList.add('no-display');
      }
      if (afterId != 'none' || afterClass != 'none'){
        deactivate(selectedCard);
        moveToNext(selectedCard);
      }
    }
  } else {
    console.log('not activated');
  }

});





function activate(card){
  card.firstChild.style.backgroundColor = 'white';
}

function deactivate(card) {
  card.firstChild.style.backgroundColor = 'red';
}

function deactivateAll() {
  const players = document.getElementsByClassName('player');
  var i = 0;
  while (i < players.length){
    players[i].firstChild.style.backgroundColor = 'red';
    i++;
  }
}

function isActivated(card){
  if (card.firstChild.style.backgroundColor === 'white') return true;
  return false;
}

function findActivatedCard(){
  let i = 0;
  let players = document.getElementsByClassName('player');
  while (i < players.length){
    if (isActivated(players[i])) return players[i];
    i++;
  } return 'not activated';
}



function changeType(selectedCard, id, cls){

  beforeId = selectedCard.firstChild.id;
  beforeClass = selectedCard.firstChild.className;

  selectedCard.firstChild.src = 'img/cards/' + id + '-' + cls + '.png';
  selectedCard.firstChild.className = cls;
  selectedCard.firstChild.id = id;


  afterId = selectedCard.firstChild.id;
  afterClass = selectedCard.firstChild.className;

}


function storeListItem(id,cls){
   var p = document.getElementsByClassName('coll-item');
   var i = 0;
   while (i < p.length){
     if (p[i].firstChild.className === cls && p[i].firstChild.id === id){
       return p[i].firstChild;
     }
     i++;
   }
}

function removeNoDisplay(id, cls){
  var p = document.getElementsByClassName('coll-item');
  var i = 0;
  while (i < p.length){
    if (p[i].firstChild.className === cls + ' no-display' && p[i].firstChild.id === id){
      p[i].firstChild.classList.remove('no-display');
    }
    i++;
  }
}

function removeOnClick(card){
  if(card.firstChild.id != 'none'){
    var id = card.firstChild.id;
    var cls = card.firstChild.className;
    removeNoDisplay(id, cls);
    card.firstChild.src = 'img/cardback.png';
    card.firstChild.id = 'none';
    card.firstChild.className = 'none';
  };
};

function resetDeck(){
  const players = document.getElementsByClassName('player');
  var i = 0;
    while (i < players.length){
      players[i].firstChild.src = 'img/cardback.png';
      players[i].firstChild.id = 'none';
      players[i].firstChild.className = 'none';
      i++;
    };
};

function resetCardList(){
  var p = document.getElementsByClassName('coll-item');
  var i = 0;
   while (i < p.length){
     p[i].firstChild.classList.remove('no-display');
     i++;
   }
}

function moveToNext(card){
  if (card.firstChild.id != 'none'){
    if (card === firstPlayer1){
      if (firstPlayer2.firstChild.id === 'none'){
        activate(firstPlayer2);
      }
    }
    if (card === firstPlayer2){
      if (secondPlayer1.firstChild.id === 'none'){
        activate(secondPlayer1);
      }
    }
    if (card === secondPlayer1){
      if (secondPlayer2.firstChild.id === 'none'){
        activate(secondPlayer2);
      }
    }
    if (card === secondPlayer2){
      if (thirdPlayer1.firstChild.id === 'none'){
        activate(thirdPlayer1);
      }
    }
    if (card === thirdPlayer1){
      if (thirdPlayer2.firstChild.id === 'none'){
        activate(thirdPlayer2);
      }
    }
    if (card === thirdPlayer2){
      if (sixthPlayer1.firstChild.id === 'none'){
        activate(sixthPlayer1);
      }
    }
    if (card === sixthPlayer1){
      if (sixthPlayer2.firstChild.id === 'none'){
        activate(sixthPlayer2);
      }
    }
    if (card === sixthPlayer2){
      if (fifthPlayer1.firstChild.id === 'none'){
        activate(fifthPlayer1);
      }
    }
    if (card === fifthPlayer1){
      if (fifthPlayer2.firstChild.id === 'none'){
        activate(fifthPlayer2);
      }
    }
    if (card === fifthPlayer2){
      if (fourthPlayer1.firstChild.id === 'none'){
        activate(fourthPlayer1);
      }
    }
    if (card === fourthPlayer1){
      if (fourthPlayer2.firstChild.id === 'none'){
        activate(fourthPlayer2);
      }
    }
    if (card === board1){
      if (board2.firstChild.id === 'none'){
        activate(board2);
      }
    }
    if (card === board2){
      if (board3.firstChild.id === 'none'){
        activate(board3);
      }
    }
    if (card === board3){
      if (board4.firstChild.id === 'none'){
        activate(board4);
      }
    }
    if (card === board4){
      if (board5.firstChild.id === 'none'){
          activate(board5);
      }
    }
  }
}

function firstAjax(){
  $.ajax({
        url: '/pokerOdds',
        method: "GET"
    }).done(function (results) {
        console.info('done:', results);
    });
}

var id = '2d2c';
function secondAjax(id){

  $.ajax({
       url: '/pokerOdds/calculate',
       method: "GET",
       contentType: "application/json",
       data: {
         id: '2d2c'
       }
   }).done(function (results) {
       console.log('done:', results)
   });
}
