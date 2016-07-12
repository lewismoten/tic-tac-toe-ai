/* eslint-env jasmine */

describe('ai-win', () => {

  'use strict';

  let lib = require('../lib/ai-win'),
    wins = require('../lib/wins'),
    blank = ' ',
    player = 'X',
    oppoinent = 'O';

  wins.forEach(win => {

    describe(`${win[0].x}x${win[0].y} - ${win[1].x}x${win[1].y} - ${win[2].x}x${win[2].y}`, () => {

      describe('complete', () => {

        win.forEach(cell => {

          it(`with ${cell.x}x${cell.y}`, () => {

            let nextMark = player,

              markAt = (x, y) => {

                return win.some(c => c.x === x && c.y === y && c !== cell) ? nextMark : blank;

              },

              canMark = (x, y) => {

                return markAt(x, y) !== nextMark;

              },
              game = {
                canMark:  canMark,
                markAt:   markAt,
                nextMark: nextMark
              },
              result = lib(game);

            expect(result.x).toBe(cell.x);
            expect(result.y).toBe(cell.y);

          });

        });

      });

      describe('Only 1 cell populated', () => {

        win.forEach(cell => {

          it(`${cell.x}x${cell.y}`, () => {

            let nextMark = player,

              markAt = (x, y) => {

                return cell.x === x && cell.y === y ? nextMark : blank;

              },

              canMark = (x, y) => {

                return markAt(x, y) !== nextMark;

              },
              game = {
                canMark:  canMark,
                markAt:   markAt,
                nextMark: nextMark
              },
              result = lib(game);

            expect(result.x).toBe(-1);
            expect(result.y).toBe(-1);

          });

        });

      });

    });

    // two filled in by opponent - don't complete
    // one by self, one by opponent - don't complete
    // full - don't complete
    xdescribe('Will not complete with other player', () => {
    });

  });


});
