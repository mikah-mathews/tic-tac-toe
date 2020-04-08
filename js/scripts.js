// beginning a game initializes blank grid, initializes 2 players, sets winArrays to 0
// first player to go is designated playerX, second is playerO
// when playerX clicks a square, boxIdArray[3]=x; when playerO clicks a square, boxIDArray[3]=O
// when boxIDArray=x, check [winArrays] to see which [winArray].contains [boxID]; if [winArray] contains [boxID], winArray[4]=1;
// when boxIDArray=o, check [winArrays] to see which [winArray].contains [boxID]; if [winArray] contains [boxID], winArray[4]=-1;
// xxwinArrays=[[[1,1], [1,2] [1,3], 0], [2,1], [2,2], [2,3], 0] [...]]
// xxwinArrays=[winRows[Row1 squares, r1 score], [Row2 squares, r2 score], [...]]
// [1,1] onClick.if winRow contains [clicked element], add or subtract 1 from [i=4]
// if winRow[4]=3 or winRow[4]=-3, winner!
// if all boxID[4] truthy (aka, all boxes have been clicked) but no winRow[4]=|3|, game is a draw
// if winner! or draw, end game, display result, display reset button


makeGrid = function() {
  var row = 1
  var col = 1
  var box = []
  var grid = []
  for (row=1; row<4; row++) {
    col = 1;    
    for (col=1; col<4; col++) {
      box = [row, col];
      boxStr = box.toString()
      grid.push(boxStr); 
    }
    return grid
  }
}

// function Grid() {
//   this.boxes = [];
// }

// function Box(row, col) {  // constructor
//   this.row = row;
//   this.col = col;
// }

// Grid.prototype.addBoxes = 
// function (grid) { 
// }
//========================================================================================

var winArraysCount = [0, 0, 0, 0, 0, 0, 0, 0]
var winArrays = [["1,1","1,2", "1,3"], ["2,1", "2,2","2,3"], ["3,1","3,2","3,3"], ["1,1","2,2","3,3"], ["1,3", "2,2", "3, 1"], ["1,1","2,1", "3,1"], ["1,2","2,2","3,2"], ["1,3","2,3","3,3"]];

// This function will execute when a button "id" is clicked!
winChecker = function(grid) {
  for (i=0; i<grid.length; i++) {
    grid.forEach(boxStr) (function() {
      if(boxStr === "id") {
        for (i=0; i<winArrays.length; i++){
          if (winArrays[i].includes(boxStr)) {
            if (turn%2==1){
              winArraysCount[i] ++;
            }
            else {
              winArraysCount[i] -= 1;
            }
          }
        }
      }
    })
  }
}

// Where does this go? Julia doesn't know.
// for (e[i]=0; i<winArraysCount.length; i++) {
//   if (e != 0) {
//     turn ++;
//   } 
// }
// if (turn===9) {
//   this.gameOver = true;


function Game() {
  this.turn = 1;
  this.gameOver = false;
  }
// Player 1
// if(turn % 2 == 1) {
//   placeMark(squareId, "X");
// } else {
//   // Player 2 / Computer
//   placeMark(squareId, "O");
// }

$(document).ready(function() {
  var buttonCount = 0;
    $("button").click(function() {
      buttonCount ++;
      var squareId = $(this).attr("id");
      $(this).prop("disabled", true);
      //test(squareId);
      console.log(squareId);
    });
});



