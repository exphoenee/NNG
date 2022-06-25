class Sector {
  constructor(rows) {
    this.rows = [];
    rows.forEach((rowConf) => {
      this.rows.push(new Row(rowConf));
      return this;
    });
  }

  render() {
    this.rows.forEach((row, rowNr) => {
      let rowContainer = createDOMElem({
        tag: div,
        attrs: {
          class: `row rowNr-${rowNr} row-container`,
        },
      });
      row.seat.forEach((seat) => {
        console.log();
        createDOMElem({
          tag: div,
          attrs: {
            class: `seat seatNr-${seat.number} category-${seat.seatCategory.seatCategory}`,
          },
          parent: rowContainer[0],
        });
      });
    });
  }
}
