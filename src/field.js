const Trump = require('./trump.js');

class Field {
  constructor () {
    this.deck = this.getAllCards();
  }
  getAllCards () {
    let allTrump = [];

    for (let m of Trump.ALL_MARK) {
      allTrump.push(...new Array(13)
        .fill(0)
        .map((_, i) => i + 1)
        .map(v => new Trump(m, v))
      );
    }
    return allTrump;
  }
  shuffle () {
    return this.deck.sort(_ => Math.random() * 2 + 1);
  }
  drawCard () {
    return this.deck.pop();
  }
}

module.exports = Field;
