/* eslint-env jasmine */

describe('ai-center', () => {

  'use strict';

  let lib = require('../lib/ai-center');

  it('picks center when center is empty', () => {

    let canMark = jasmine.createSpy('canMark').andReturn(true),
      game = {canMark: canMark},
      result = lib(game);

    expect(canMark).toHaveBeenCalledWith(2, 2);
    expect(result.x).toEqual(2);
    expect(result.y).toEqual(2);

  });

  it('picks nothing when center is marked', () => {

    let canMark = jasmine.createSpy('canMark').andReturn(false),
      game = {canMark: canMark},
      result = lib(game);

    expect(canMark).toHaveBeenCalledWith(2, 2);
    expect(result.x).toEqual(-1);
    expect(result.y).toEqual(-1);

  });

});
