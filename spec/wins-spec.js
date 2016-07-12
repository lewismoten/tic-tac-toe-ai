/* eslint-env jasmine */

describe('wins', () => {

  'use strict';

  let wins = require('../lib/wins');

  it('has 8 different ways to win', () => {

    expect(wins.length).toBe(8);

  });

  it('can win top row', () => {

    let found = wins.some(win => {

      return win.some(cell => cell.x === 1 && cell.y === 1) &&
        win.some(cell => cell.x === 2 && cell.y === 1) &&
        win.some(cell => cell.x === 3 && cell.y === 1);

    });

    expect(found).toBe(true);

  });

  it('can win middle row', () => {

    let found = wins.some(win => {

      return win.some(cell => cell.x === 1 && cell.y === 2) &&
        win.some(cell => cell.x === 2 && cell.y === 2) &&
        win.some(cell => cell.x === 3 && cell.y === 2);

    });

    expect(found).toBe(true);

  });

  it('can win bottom row', () => {

    let found = wins.some(win => {

      return win.some(cell => cell.x === 1 && cell.y === 3) &&
        win.some(cell => cell.x === 2 && cell.y === 3) &&
        win.some(cell => cell.x === 3 && cell.y === 3);

    });

    expect(found).toBe(true);

  });

  it('can win left column', () => {

    let found = wins.some(win => {

      return win.some(cell => cell.x === 1 && cell.y === 1) &&
        win.some(cell => cell.x === 1 && cell.y === 2) &&
        win.some(cell => cell.x === 1 && cell.y === 3);

    });

    expect(found).toBe(true);

  });

  it('can win middle column', () => {

    let found = wins.some(win => {

      return win.some(cell => cell.x === 2 && cell.y === 1) &&
        win.some(cell => cell.x === 2 && cell.y === 2) &&
        win.some(cell => cell.x === 2 && cell.y === 3);

    });

    expect(found).toBe(true);

  });

  it('can win right column', () => {

    let found = wins.some(win => {

      return win.some(cell => cell.x === 3 && cell.y === 1) &&
        win.some(cell => cell.x === 3 && cell.y === 2) &&
        win.some(cell => cell.x === 3 && cell.y === 3);

    });

    expect(found).toBe(true);

  });

  it('can win top-left to bottom-right', () => {

    let found = wins.some(win => {

      return win.some(cell => cell.x === 1 && cell.y === 1) &&
        win.some(cell => cell.x === 2 && cell.y === 2) &&
        win.some(cell => cell.x === 3 && cell.y === 3);

    });

    expect(found).toBe(true);

  });

  it('can win top-right to bottom-left', () => {

    let found = wins.some(win => {

      return win.some(cell => cell.x === 3 && cell.y === 1) &&
        win.some(cell => cell.x === 2 && cell.y === 2) &&
        win.some(cell => cell.x === 1 && cell.y === 3);

    });

    expect(found).toBe(true);

  });

});
