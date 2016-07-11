(() => {

  'use strict';

  const wins = require('./wins.js');

  module.exports = ({canMark, markAt, nextMark}) => {

    return wins.reduce((move, win) => {

      if (move.x !== -1) {

        return move;

      }

      if (!hasOpponent(win, canMark, markAt, nextMark)) {

        return move;

      }

      if (opponentCount(win, canMark, markAt, nextMark) !== 2) {

        return move;

      }

      return firstEmptyCell(win, canMark);

    }, {x: -1, y: -1});

  };

  function firstEmptyCell(cells, canMark) {

    return cells.find(cell => canMark(cell.x, cell.y));

  }

  function opponentCount(cells, canMark, markAt, nextMark) {

    return cells.reduce((sum, cell) => {

      return markAt(cell.x, cell.y) !== nextMark &&
        !canMark(cell.x, cell.y) ? ++sum : sum;

    }, 0);

  }

  function hasOpponent(cells, canMark, markAt, nextMark) {

    cells.some((cell) => {

      return !canMark(cell.x, cell.y) &&
        markAt(cell.x, cell.y) !== nextMark;

    });

  }

})();
