const assert = require('assert');
const Player = require('../src/player.js');
const Trump = require('../src/trump.js');

describe('player', () => {
  it('addCardのテスト', () => {
    let player = new Player('hoge');
    let card = new Trump(Trump.MARK.C, 1);
    player.addCard(card);
    assert(player.deck[0] === card);
  });
  it('点数', () => {
    let player = new Player('hoge');
    player.addCard(new Trump(Trump.MARK.C, 1));
    assert(player.getDeckPower() === 10);
    player.addCard(new Trump(Trump.MARK.D, 8));
    assert(player.getDeckPower() === 18);
    player.addCard(new Trump(Trump.MARK.D, 10));
    assert(player.getDeckPower() === 19);
    player.addCard(new Trump(Trump.MARK.D, 1));
    assert(player.getDeckPower() === 20);
  });
});
