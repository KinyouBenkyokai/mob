const chai = require('chai'),
      should = chai.should(),
      assert = require('assert');
const Field = require('../src/field.js');

describe('Field', ()=>{
    let field = new Field();
    it('BlackJackのマークを全部生成する', ()=>{
        let card = field.getAllCards();
        assert(card.length == 4*13);
    });
    it('シャッフル 目視しろ', ()=>{
        console.log(field.deck);
        field.shuffle();
        console.log(field.deck);
    });
});
