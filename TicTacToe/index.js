var turn = 'X';
var squares = document.querySelectorAll('.square');
var resultDisplay = document.querySelector('#result');
var resetButton = document.querySelector('#reset');

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function(event) {
    if (event.target.textContent === '') {
      event.target.textContent = turn;
      checkWin();
      switchTurn();
    }
  });
}

resetButton.addEventListener('click', resetGame);

function switchTurn() {
  if (turn === 'X') {
    turn = 'O';
  } else {
    turn = 'X';
  }
}

function checkWin() {
  var solutions = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var i = 0; i < solutions.length; i++) {
    var solution = solutions[i];
    var a = squares[solution[0]];
    var b = squares[solution[1]];
    var c = squares[solution[2]];
    if (a.textContent === turn && b.textContent === turn && c.textContent === turn) {
      resultDisplay.textContent = turn + ' Wins!';
      for (var j = 0; j < squares.length; j++) {
        squares[j].removeEventListener('click', squareClick);
      }
      return;
    }
  }

  var count = 0;
  for (var i = 0; i < squares.length; i++) {
    if (squares[i].textContent !== '') {
      count++;
    }
  }

  if (count === 9) {
    resultDisplay.textContent = 'Draw';
    for (var i = 0; i < squares.length; i++) {
      squares[i].removeEventListener('click', squareClick);
    }
  }
}

function resetGame() {
  turn = 'X';
  resultDisplay.textContent = '';
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
    squares[i].addEventListener('click', squareClick);
  }
}