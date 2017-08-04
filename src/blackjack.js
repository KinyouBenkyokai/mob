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
    let userInput = ReadLineSync.question('user:');
    console.log(`userInput : ${userInput}`);
    let player = new Player(userInput);
    this.players.push( player );
    player.deck.push(this.filed.drawCard());
    console.log(`${player.name}'s deck:`);
    player.showDeck();
  }
}
module.exports = BlackJack;
