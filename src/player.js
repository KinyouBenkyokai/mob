class Player{
    constructor(name){
        this.name = name;
        this.cards = [];
    }
    addCard(card){
        this.cards.push(card);
    }
}
module.exports = Player;