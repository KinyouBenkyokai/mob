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
    // Aの枚数を取得する
    let ANumber = this.deck.filter(_=> _.number===1).length;
    for (let trump of sorted) {
      // バースト処理
      if( trump.number === 1 && power < 12 - (ANumber--) ){
        trump.number = 1;
      }
      power += trump.number;
    }
    return power;
  }
}
module.exports = Player;
