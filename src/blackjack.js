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
    // ディーラーを生成
    console.log(`dealer Turn`);
    this.players.push(new Player(`dealer`));

    // プレイヤーを生成
    let userInput = ReadLineSync.question('user:');
    console.log(`userInput : ${userInput}`);
    this.players.push(new Player(userInput));

    this.doTurn();
  }

  doTurn () {
    let turnCount = 0;
    while (true) {
      turnCount++;

      // すべての人が完了しているか
      let compliteNum = this.players.filter(_ => _.isEndTurn).length;
      if (compliteNum === this.players.length) { return; }

      for (let player of this.players) {
        // 既にターンエンド宣言している人はスキップ
        if (player.isEndTurn) { continue; }

        player.deck.push(this.filed.drawCard());
        console.log(`${player.name}'s deck:`);
        player.showDeck();

        if (turnCount > 2) { // 初手以外は入力を元にレイズ・スタンド
          let isContinue = ReadLineSync.question('continue?(y/n):');
          if (isContinue === 'n') { player.isEndTurn = true; }
        }
      }
    }
  }
}
module.exports = BlackJack;
