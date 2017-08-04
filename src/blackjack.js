const Trump = require('./trump.js');
const ReadLineSync = require('readline-sync');

class BlackJack{
    constructor(){
        this.deck = this.getAllCards();
        this.main();
    }
    getAllCards(){
        let allTrump = [];

        for (let m of Trump.ALL_MARK) {    
            allTrump.push(... new Array(13)
                .fill(0)
                .map((_, i) => i + 1)
                .map(v => new Trump(m, v))
            )
        }
        return allTrump
    }
    main(){
        let userInput = ReadLineSync.question('user:');
        console.log(`userInput : ${userInput}`);
    }
}
module.exports = BlackJack;
