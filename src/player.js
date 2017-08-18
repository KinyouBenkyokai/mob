const Trump = require('../src/trump.js');

class Player {
  constructor (name) {
    this.name = name;
    this.isEndTurn = false;
    this.deck = [];
  }
  addCard (card) {
    this.deck.push(card);
  }
  showDeck () {
    let str = this.deck
      .map(_ => `${Trump.numToMarkStr(_.mark)}:${_.number}`)
      .join(' ');
    console.log(str);
  }
  getDeckPower () {
    let power = 0;
    // 複製したデッキを13→1にソートする
    let sorted = [].concat(this.deck).sort((a, b) => b.number - a.number);
    for (let trump of sorted) {
      power += trump.number;
      // todo Aの処理
    }
    return power;
  }
}
module.exports = Player;
