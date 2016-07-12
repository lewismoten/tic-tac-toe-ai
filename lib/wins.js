(() => {

  'use strict';

  const wins = new Array(8).fill(0).map(() => new Array(3));

  for (let i = 0; i < 3; i++) {

    let n = i + 1;

    // left column
    wins[0][i] = cell(1, n);

    // center column
    wins[1][i] = cell(2, n);

    // right column
    wins[2][i] = cell(3, n);

    // top row
    wins[3][i] = cell(n, 1);

    // middle row
    wins[4][i] = cell(n, 2);

    // bottom row
    wins[5][i] = cell(n, 3);

    // top-left to bottom-right
    wins[6][i] = cell(n, n);

    // bottom-left to top-right
    wins[7][i] = cell(n, 3 - i);

  }

  module.exports = wins;

  function cell(x, y) {

    return {x: x, y: y};

  }

})();
