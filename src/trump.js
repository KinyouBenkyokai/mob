class Trump {
  static get ALL_MARK() {
    return [
      Trump.MARK.D,
      Trump.MARK.C,
      Trump.MARK.S,
      Trump.MARK.H,
    ]
  }
  static get MARK() {
    return {
      D: 1,
      C: 2,
      S: 3,
      H: 4
    }
  };
  constructor(mark, number) {
    this.mark = mark;
    this.number = number;
  }

}
module.exports = Trump;