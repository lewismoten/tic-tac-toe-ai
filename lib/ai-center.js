(() => {

  'use strict';

  module.exports = (game) => {

    return game.canMark(2, 2) ? {x: 2, y: 2} : {x: -1, y: -1};

  };

})();
