const ReadLineSync = require('readline-sync');
const Field = require('./field');
const Player = require('./player');

class BlackJack {
  constructor () {
    this.filed = new Field();
    /** @type {Player[]} */
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
    this.checkPower();
  }

  doTurn () {
    let turnCount = -2;
    while (true) {
      turnCount++;

      // すべての人が完了しているか
      let compliteNum = this.players.filter(_ => _.isEndTurn).length;
      if (compliteNum === this.players.length) { return; }

      for (let player of this.players) {
        // 既にターンエンド宣言している人はスキップ
        if (player.isEndTurn) { continue; }

        player.deck.push(this.filed.drawCard());
        if (turnCount > 0) { // 初手以外は入力を元にレイズ・スタンド
          console.log(`==== Turn ${turnCount} ====`);
          console.log(`${player.name}'s Power:${player.getDeckPower()} Deck: `);
          player.showDeck();

          let isContinue = ReadLineSync.question('continue?(y/n):');
          if (isContinue === 'n') { player.isEndTurn = true; }
        }
      }
    }
  }

  checkPower () {
    console.log('==== result ====');
    let maxPower = this.players
        .filter(_=> !_.isBurst())
        .reduce((prev, curr) => Math.max(prev, curr.getDeckPower()), 0);
    for (let player of this.players) {
      let isWin = player.getDeckPower() === maxPower;
      console.log(`${player.name}: ${player.getDeckPower()}  ${ isWin ? '[WIN]' : '[LOSE]'}`);
      // todo バーストした時LOSEみたいな感じ
    }
  }
}
module.exports = BlackJack;
