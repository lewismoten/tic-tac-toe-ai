/* eslint-env jasmine */

describe('lib', () => {

  'use strict';

  let lib = require('.');

  it('picks corner', () => {

    let move = lib({
      canMark:  () => true,
      markAt:   () => 'X',
      nextMark: 'X'
    });

    expect(move.x).not.toEqual(-1);

  });

});
