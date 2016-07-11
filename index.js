(() => {

  'use strict';

  let decisions = [
      require('./lib/ai-win'),
      require('./lib/ai-block'),
      require('./lib/ai-fork'),
      require('./lib/ai-block-fork'),
      require('./lib/ai-center'),
      require('./lib/ai-opposite-corner'),
      require('./lib/ai-empty-corner'),
      require('./lib/ai-empty-side')
    ];

  module.exports = (board) => {

    let result = {x: -1, y: -1};

    decisions.some(strategy => {

      let move = strategy(board);
      if (move.x !== -1) {

        result = move;
        return true;

      }

      return false;

    });

    return result;

  };


})();
