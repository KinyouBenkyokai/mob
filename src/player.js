class Player {
  constructor (name) {
    this.name = name;
    this.deck = [];
  }
  addCard (card) {
    this.deck.push(card);
  }
  showDeck(){
    console.log(this.deck.map(_=>`${_.mark} : ${_.number}` ).join(" "));
  }
}
module.exports = Player;
