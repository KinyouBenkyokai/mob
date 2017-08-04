const ReadLineSync = require('readline-sync');

class BlackJack{
    constructor(){
        this.main();
    }
    main(){
        let userInput = ReadLineSync.question('user:');
        console.log(`userInput : ${userInput}`);
    }
}
module.exports = BlackJack;
