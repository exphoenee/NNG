class Sector {
  constructor(rows) {
    this.rows = [];
    rows.forEach((rowConf) => {
      this.rows.push(new Row(rowConf));
      return this;
    });
  }
}
