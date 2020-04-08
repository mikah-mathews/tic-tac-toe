//beginning a game initializes blank grid, initializes 2 players, sets winArrays to 0
//first player to go is designated playerX, second is playerO
//when playerX clicks a square, boxIdArray[3]=x; when playerO clicks a square, boxIDArray[3]=O
//when boxIDArray=x, check [winArrays] to see which [winArray].contains [boxID]; if [winArray] contains [boxID], winArray[4]=1;
//when boxIDArray=o, check [winArrays] to see which [winArray].contains [boxID]; if [winArray] contains [boxID], winArray[4]=-1;
// winArrays=[[[1,1], [1,2] [1,3], 0], [2,1], [2,2], [2,3], 0] [...]]
// winArrays=[winRows[Row1 squares, r1 score], [Row2 squares, r2 score], [...]]
// [1,1] onClick.if winRow contains [clicked element], add or subtract 1 from [i=4]
// if winRow[4]=3 or winRow[4]=-3, winner!




