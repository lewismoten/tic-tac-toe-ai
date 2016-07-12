(() => {

  'use strict';

  let winStrategy = require('./lib/ai-win'),
    blockStrategy = require('./lib/ai-block'),
    forkStrategy = require('./lib/ai-fork'),
    blockFormStrategy = require('./lib/ai-block-fork'),
    centerStrategy = require('./lib/ai-center'),
    oppositeCornerStrategy = require('./lib/ai-opposite-corner'),
    emptyCornerStrategy = require('./lib/ai-empty-corner'),
    sideStrategy = require('./lib/ai-side'),
    decisions = [
      winStrategy,
      blockStrategy,
      forkStrategy,
      blockFormStrategy,
      centerStrategy,
      oppositeCornerStrategy,
      emptyCornerStrategy,
      sideStrategy
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
