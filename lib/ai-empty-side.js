(() => {

  'use strict';

  const sides = [
      {x: 2, y: 1},
      {x: 1, y: 2},
      {x: 3, y: 2},
      {x: 2, y: 3}
    ];

  module.exports = (game) => {

    const canMark = game.canMark;

    return sides.find(cell => canMark(cell.x, cell.y)) || {x: -1, y: -1};

  };

})();
