const chai = require('chai'),
      should = chai.should(),
      assert = require('assert');
const BlackJack = require('../src/blackjack.js');

describe('blackjack', ()=>{
    let blackjack = new BlackJack();
    it('BlackJackのマークを全部生成する', ()=>{
        let card = blackjack.getAllCards();
        assert(card.length == 4*13);
    });
});