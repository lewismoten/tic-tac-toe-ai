/* eslint-env jasmine */

describe('ai-side', () => {

  'use strict';

  let lib = require('../lib/ai-corner');

  it('picks top-left when other corners are marked', () => {

    let canMark = jasmine.createSpy('canMark').andCallFake((x, y) => {

        return !(
          x === 3 && y === 1 ||
          x === 1 && y === 3 ||
          x === 3 && y === 3
        );

    }),
    game = {canMark: canMark},
    result = lib(game);

    expect(result.x).toEqual(1);
    expect(result.y).toEqual(1);

  });

  it('picks top-right when other corners are marked', () => {

    let canMark = jasmine.createSpy('canMark').andCallFake((x, y) => {

        return !(
          x === 1 && y === 1 ||
          x === 1 && y === 3 ||
          x === 3 && y === 3
        );

    }),
    game = {canMark: canMark},
    result = lib(game);

    expect(result.x).toEqual(3);
    expect(result.y).toEqual(1);

  });

  it('picks bottom-left when other corners are marked', () => {

    let canMark = jasmine.createSpy('canMark').andCallFake((x, y) => {

        return !(
          x === 1 && y === 1 ||
          x === 3 && y === 1 ||
          x === 3 && y === 3
        );

    }),
    game = {canMark: canMark},
    result = lib(game);

    expect(result.x).toEqual(1);
    expect(result.y).toEqual(3);

  });

  it('picks bottom-right when other corners are marked', () => {

    let canMark = jasmine.createSpy('canMark').andCallFake((x, y) => {

        return !(
          x === 1 && y === 1 ||
          x === 3 && y === 1 ||
          x === 1 && y === 3
        );

    }),
    game = {canMark: canMark},
    result = lib(game);

    expect(result.x).toEqual(3);
    expect(result.y).toEqual(3);

  });

  it('picks none when all corners are marked', () => {

    let canMark = jasmine.createSpy('canMark').andCallFake(
      (x, y) => {

        return !(
          x === 1 && y === 1 ||
          x === 3 && y === 1 ||
          x === 1 && y === 3 ||
          x === 3 && y === 3
        );

      }
    ),
    game = {canMark: canMark},
    result = lib(game);

    expect(result.x).toEqual(-1);
    expect(result.y).toEqual(-1);

  });

});
