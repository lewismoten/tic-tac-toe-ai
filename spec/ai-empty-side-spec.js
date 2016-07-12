/* eslint-env jasmine */

describe('ai-empty-side', () => {

  'use strict';

  let lib = require('../lib/ai-empty-side');

  it('picks top when other sides are marked', () => {

    let canMark = jasmine.createSpy('canMark').andCallFake((x, y) => {

      return !(
        x === 2 && y === 3 ||
        x === 1 && y === 2 ||
        x === 3 && y === 2
      );

    }),
    game = {canMark: canMark},
    result = lib(game);

    expect(result.x).toEqual(2);
    expect(result.y).toEqual(1);

  });

  it('picks left when other sides are marked', () => {

    let canMark = jasmine.createSpy('canMark').andCallFake((x, y) => {

      return !(
        x === 2 && y === 1 ||
        x === 2 && y === 3 ||
        x === 3 && y === 2
      );

    }),
    game = {canMark: canMark},
    result = lib(game);

    expect(result.x).toEqual(1);
    expect(result.y).toEqual(2);

  });

  it('picks right when other sides are marked', () => {

    let canMark = jasmine.createSpy('canMark').andCallFake((x, y) => {

      return !(
        x === 2 && y === 1 ||
        x === 2 && y === 3 ||
        x === 1 && y === 2
      );

    }),
    game = {canMark: canMark},
    result = lib(game);

    expect(result.x).toEqual(3);
    expect(result.y).toEqual(2);

  });

  it('picks bottom when other sides are marked', () => {

    let canMark = jasmine.createSpy('canMark').andCallFake((x, y) => {

      return !(
        x === 2 && y === 1 ||
        x === 1 && y === 2 ||
        x === 3 && y === 2
      );

    }),
    game = {canMark: canMark},
    result = lib(game);

    expect(result.x).toEqual(2);
    expect(result.y).toEqual(3);

  });

  it('picks none when all sides are marked', () => {

    let canMark = jasmine.createSpy('canMark').andCallFake(
      (x, y) => {

        return !(
          x === 2 && y === 1 ||
          x === 2 && y === 3 ||
          x === 1 && y === 2 ||
          x === 3 && y === 2
        );

      }
    ),
    game = {canMark: canMark},
    result = lib(game);

    expect(result.x).toEqual(-1);
    expect(result.y).toEqual(-1);

  });

});
