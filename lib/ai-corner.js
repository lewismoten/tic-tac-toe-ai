(() => {

  'use strict';

  module.exports = ({canMark}) => {

    let move = {x: -1, y: -1},
      corners = [
        [1, 1],
        [3, 1],
        [1, 3],
        [3, 3]
      ];

    corners.some(([x, y]) => {

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
