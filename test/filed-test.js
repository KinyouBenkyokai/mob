const assert = require('assert');
const Field = require('../src/field.js');

describe('Field', () => {
  let field = new Field();
  it('BlackJackのマークを全部生成する', () => {
    let card = field.getAllCards();
    assert(card.length === 4 * 13);
  });
  it('シャッフル', () => {
    let filedJSON = JSON.stringify(field.deck);
    field.shuffle();
    assert(JSON.stringify(field.deck) !== filedJSON);
  });
  it('デッキからカードを取り出す', () => {
    let lastCard = field.deck[field.deck.length - 1];
    let card = field.drawCard();
    assert(lastCard === card);
  });
});
