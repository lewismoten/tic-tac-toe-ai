(() => {

  'use strict';

  const wins = require('./wins.js');

  module.exports = ({canMark, markAt, nextMark}) => {

    let candidates = wins
      .filter(hasTwoEmptyMarks.bind(null, canMark))
      .filter(hasMyMark.bind(null, markAt, nextMark))
      .filter(hasEmptyCrossing.bind(null, canMark));

    if (candidates.length === 0) {

      return {x: -1, y: -1};

    }

    return candidates[0];

  };

  function hasTwoEmptyMarks(canMark, cells) {

    return cells.reduce((sum, cell) => {

      return canMark(cell.x, cell.y) ? ++sum : sum;

    }, 0);

  }

  function hasMyMark(markAt, nextMark, cells) {

    return cells.some(cell => markAt(cell.x, cell.y) === nextMark);

  }

  function hasEmptyCrossing(canMark, path, allPaths) {

    let result = {x: -1, y: -1};

    path.forEach(cell => {

      if (canMark(cell.x, cell.y) && intersects(cell, allPaths, path)) {

        result = cell;
        return true;

      }

      return false;

    });

    return result;

  }

  function intersects(cell, streaks, excluded) {

    return streaks.some(streak => streak !== excluded && hasCell(streak, cell));

  }

  function hasCell(cells, {x, y}) {

    return cells.some(cell => cell.x === x && cell.y === y);

  }

})();
