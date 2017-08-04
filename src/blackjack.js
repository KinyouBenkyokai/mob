const Trump = require('./trump.js');
class BlackJack{
    constructor(){
        console.log(1);
        let trump = new Trump("Dia", 1);
        console.log(trump);
    }
}
module.exports = BlackJack;
