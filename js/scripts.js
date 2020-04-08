// beginning a game initializes blank grid, initializes 2 players, sets winArrays to 0
// first player to go is designated playerX, second is playerO
// when playerX clicks a square, boxIdArray[3]=x; when playerO clicks a square, boxIDArray[3]=O
// when boxIDArray=x, check [winArrays] to see which [winArray].contains [boxID]; if [winArray] contains [boxID], winArray[4]=1;
// when boxIDArray=o, check [winArrays] to see which [winArray].contains [boxID]; if [winArray] contains [boxID], winArray[4]=-1;
// winArrays=[[[1,1], [1,2] [1,3], 0], [2,1], [2,2], [2,3], 0] [...]]
// winArrays=[winRows[Row1 squares, r1 score], [Row2 squares, r2 score], [...]]
// [1,1] onClick.if winRow contains [clicked element], add or subtract 1 from [i=4]
// if winRow[4]=3 or winRow[4]=-3, winner!
// if all boxID[4] truthy (aka, all boxes have been clicked) but no winRow[4]=|3|, game is a draw
// if winner! or draw, end game, display result, display reset button


//What happens when you click?
//1. boxID[3]=playerID
//2. UI grid displays playerID
//3. program checks winArrays for boxID
//3a. if boxID[3]=x add 1 from winArray[4]
//3b. if boxID[3]=o subtract 1 from winArray[4]
//4. 

// row, col = 1, 1
// while row < 4:
//     col = 1
//     while col < 4:
//         if row != col:
//             print(row, col)
//         col += 1
//     row += 1     

var row = 1
var col = 1
var box = []
var grid = []
for (row=1; row<4; row++) {
  col = 1;    
  for (col=1; col<4; col++) {
    box = [row, col];
    grid.push(box); 
  }
  console.log(grid)
}


function Board() {
  boxIDs=[[1,1], [1,2], [1,3], [2,1], [2,2], [2,3], [3,1], [3,2], [3,3]];
}
var winArrays = [[[1,1],[1,2], [1,3]], [[2,1],[2,2],[2,3]], [[3,1],[3,2],[3,3]], [[1,1],[2,2],[3,3]], [[1,3], [2,2], [3, 1]], [[[1,1],[2,1], [3,1]], [[1,2],[2,2],[3,2]], [[1,3],[2,3],[3,3]]]];
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

    $(".test").click(function() {
      $(this).prop("disabled", true);
    });
});
