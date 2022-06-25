class Sector {
  constructor({ rows, name, mirrored }) {
    this.rows = [];
    this.name = name;
    this.mirrored = mirrored;
    rows.forEach((rowConf) => {
      this.rows.push(new Row(rowConf));
      return this;
    });
  }

  render() {
    const sectorContainer = createDOMElem({
      tag: div,
      attrs: {
        class: `sector-container ${this.name
          .replaceAll(" ", "-")
          .replaceAll(".", "")}`,
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
      const toRender = this.mirrored ? row.seat.reverse() : row.seat;
      toRender.forEach((seat) => {
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
