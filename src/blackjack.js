const Trump = require('./trump.js');
class BlackJack{
    constructor(){
        console.log(1);
        let trump = new Trump(Trump.MARK.D, 1);
        let allTump = [];

        for (let m of Trump.ALL_MARK) {    
            allTump.push(... new Array(13)
                .fill(0)
                .map((_, i) => i + 1)
                .map(v => new Trump(m, v))
            )
        }


        console.log(trump, allTump);
    }
}
module.exports = BlackJack;
