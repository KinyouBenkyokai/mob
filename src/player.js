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
}
module.exports = Player;
