const assert = require('assert');
const Player = require('../src/player.js');
const Trump = require('../src/trump.js');

describe('player', () => {
  let player = new Player('hoge');
  it('addCardのテスト', () => {
    let card = new Trump(Trump.MARK.C, 1);
    player.addCard(card);
    assert(player.deck[0] === card);
  });
});
