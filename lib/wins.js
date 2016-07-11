(() => {

  'use strict';

  const wins = new Array(8).fill(new Array(3).fill({x: -1, y: -1}));

  for (let i = 0; i < 3; i++) {

    wins[0][i].x = 1;
    wins[0][i].y = i + 1;
    wins[1][i].x = 2;
    wins[1][i].y = i + 1;
    wins[2][i].x = 3;
    wins[2][i].y = i + 1;
    wins[3][i].x = i + 1;
    wins[3][i].y = 1;
    wins[4][i].x = i + 1;
    wins[4][i].y = 2;
    wins[5][i].x = i + 1;
    wins[5][i].y = 3;
    wins[6][i].x = i + 1;
    wins[6][i].y = i + 1;
    wins[7][i].x = 3 - i;
    wins[7][i].y = i + 1;

  }

  module.exports = wins;

})();
