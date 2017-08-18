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
  it('ACE 5枚', () => {
    let player = new Player('hoge');
    player.addCard(new Trump(Trump.MARK.C, 1));
    assert(player.getDeckPower() === 10);
    player.addCard(new Trump(Trump.MARK.D, 1));
    assert(player.getDeckPower() === 20);
    player.addCard(new Trump(Trump.MARK.D, 1));
    assert(player.getDeckPower() === 12);
    player.addCard(new Trump(Trump.MARK.D, 1));
    assert(player.getDeckPower() === 13);
    player.addCard(new Trump(Trump.MARK.D, 1));
    assert(player.getDeckPower() === 14);
  });
  it('10以上', () => {
    let player = new Player('hoge');
    player.addCard(new Trump(Trump.MARK.C, 11));
    assert(player.getDeckPower() === 1);
    player.addCard(new Trump(Trump.MARK.D, 12));
    assert(player.getDeckPower() === 2);
    player.addCard(new Trump(Trump.MARK.D, 13));
    assert(player.getDeckPower() === 3);
  });
});
