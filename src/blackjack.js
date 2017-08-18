const ReadLineSync = require('readline-sync');
const Field = require('./field');
const Player = require('./player');

class BlackJack {
  constructor () {
    this.filed = new Field();
    this.players = [];
    this.main();
  }
  main () {
    console.log(`dealer Turn`);
    let dealer = new Player(`dealer`);
    this.players.push( dealer );
    dealer.deck.push(this.filed.drawCard());
    console.log(`${dealer.name}'s deck:`);
    dealer.showDeck();

    let userInput = ReadLineSync.question('user:');
    console.log(`userInput : ${userInput}`);
    let player = new Player(userInput);
    this.players.push( player );
    player.deck.push(this.filed.drawCard());
    console.log(`${player.name}'s deck:`);
    player.showDeck();

  }

  doTurn (int dealer, int player) {
    
  }
}
module.exports = BlackJack;
