class Sector {
  constructor({ rows, name }) {
    this.rows = [];
    this.name = name;
    rows.forEach((rowConf) => {
      this.rows.push(new Row(rowConf));
      return this;
    });
  }

  render() {
    const sectorContainer = createDOMElem({
      tag: div,
      attrs: {
        class: `sector-container ${this.name}`,
      },
      children: [
        {
          tag: div,
          attrs: {
            class: `title`,
          },
          children: [{ tag: p, content: this.name }],
        },
      ],
    });
    this.rows.forEach((row, rowNr) => {
      const rowContainer = createDOMElem({
        tag: div,
        attrs: {
          class: `row rowNr-${rowNr} row-container`,
        },
        content: `row: ${rowNr + 1}`,
        parent: sectorContainer[0],
      });
      row.seat.forEach((seat) => {
        createDOMElem({
          tag: div,
          attrs: {
            class: `seat seatNr-${seat.number} category-${
              seat.seatCategory.seatCategory
            } ${seat.occupied ? "occupied" : "free"}`,
          },
          parent: rowContainer[0],
          content: seat.number + 1,
        });
      });
    });
  }
}
