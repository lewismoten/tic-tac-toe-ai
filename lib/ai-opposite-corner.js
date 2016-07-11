(() => {

  'use strict';

  module.exports = ({canMark, markAt, nextMark}) => {

    let move = {x: -1, y: -1},
      corners = [
        [1, 1, 3, 3],
        [3, 1, 3, 1],
        [1, 3, 3, 1],
        [3, 3, 3, 3]
      ];

    corners.some(([x, y, opponentX, opponentY]) => {

      if (canMark(x, y) &&
        !canMark(opponentX, opponentY) &&
        markAt(opponentX, opponentY) !== nextMark) {

        move.x = x;
        move.y = y;

        return true;

      }

      return false;

    });

    return move;

  };

})();
