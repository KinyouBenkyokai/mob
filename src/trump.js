class Trump {
  static get ALL_MARK () {
    return [
      Trump.MARK.D,
      Trump.MARK.C,
      Trump.MARK.S,
      Trump.MARK.H
    ];
  }
  static get MARK () {
    return {
      D: 1,
      C: 2,
      S: 3,
      H: 4
    };
  };
  static numToMarkStr (num) {
    for (let mark in this.MARK) {
      let key = this.MARK[mark];
      if (key === num) return mark;
    }
  }
  constructor (mark, number) {
    this.mark = mark;
    this.number = number;
  }
}
module.exports = Trump;
