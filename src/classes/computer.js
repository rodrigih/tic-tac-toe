'use strict';

class Computer{

  constructor(difficulty,opponent){
    this.difficulty = difficulty;
    this.opponent = opponent;
    this.move = (difficulty === 'easy'? this.makeEasyMove : this.makeNormalMove);
    this.winningMoves =
      [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]];
  }

  randomSelect(a){
    return a[Math.floor(Math.random() * a.length)];
  }

  makeEasyMove(board){
    /*
    - Find all indices without a piece on it
    - Pick one at random.
    */


    var empty = board.map((c,i) => (c === '' ? i : ''))
           .filter((c) => c !== '')

    return this.randomSelect(empty);

  }

  makeNormalMove(board){

    /* Medium difficulty moves same as Easy moves, except priority is given to
     * spaces where there is about to be 3 in a row.*/

    function consecutive(a){
      return Math.max( a.reduce((acc,curr) => (curr === 'X' ? ++acc:acc),0),
        a.reduce((acc,curr) => (curr === 'O' ? ++acc:acc),0)
      );
    }

    function containsNumber(a){
      return a.map((c) => !isNaN(c)).reduce((acc,curr) => acc || curr,false);
    }

    /* Triplets is winningMoves with index replaced by occupied piece.
     * If no piece is there, then the index is not replaced.
    */
    var triplets = this.winningMoves.map((c) => c.map((i) => (board[i] !== ''?board[i]:i)));

    /* Filter triples that does not have an empty space*/
    triplets = triplets.filter((c) => containsNumber(c));

    /* Filter triplets that have two of the same piece */
    triplets = triplets.filter((curr) => consecutive(curr) === 2);

    if(triplets.length !== 0){
      return this.randomSelect(triplets).find((curr) => ! isNaN(curr));
    }
    else{
      return this.makeEasyMove(board);
    }

  }
}

module.exports = Computer;
