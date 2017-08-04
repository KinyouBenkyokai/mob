const ReadLineSync = require('readline-sync');
const Field = require('./field');

class BlackJack {
  constructor () {
    this.filed = new Field();
    this.main();
  }
  main () {
    let userInput = ReadLineSync.question('user:');
    console.log(`userInput : ${userInput}`);
  }
}
module.exports = BlackJack;
