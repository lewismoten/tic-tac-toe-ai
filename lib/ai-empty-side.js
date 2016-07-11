(() => {

  'use strict';

  module.exports = ({canMark}) => {

    let move = {x: -1, y: -1},
      sides = [
        [2, 1],
        [1, 2],
        [3, 2],
        [2, 3]
      ];

    sides.some(([x, y]) => {

      if (canMark(x, y)) {

        move.x = x;
        move.y = y;

        return true;

      }

      return false;

    });

    return move;

  };

})();
