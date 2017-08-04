const assert = require('assert');
const Trump = require('../src/trump.js');

describe('trump', () => {
  let trump = new Trump('clover', 1);
  it('１＋１＝２となるテスト', () => {
    assert(1 + 1 === 2);
  });
  it('trumpを生成できる', () => {
    assert(trump.number, 1);
  });
  it('staticなマークを取得できる', () => {
    assert(Trump.MARK.H === 4);
  });
});
