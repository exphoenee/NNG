class Row {
  constructor(rowConf) {
    this.seat = [];
    this.seatNumber = rowConf.length;
    rowConf.forEach((category, seatNr) => {
      const row = new Seat({ number: seatNr, seatCategory: category });
      this.seat.push(row);
    });
    return this;
  }

  render(parent, rowNr, mirrored, offset) {
    const rowContainer = createDOMElem({
      tag: div,
      attrs: {
        class: `row rowNr-${rowNr} row-container`,
      },
      content: `row: ${rowNr + 1}`,
      parent: parent,
    });

    const toRender = mirrored ? this.seat.reverse() : this.seat;

    toRender.forEach((seat, index) => {
      if (offset && index == 0) {
        console.log(this.seatNumber, index);
        for (let i = 0; i < index; i++) {
          createDOMElem({
            tag: div,
            attrs: { class: "offset" },
            parent: rowContainer,
          });
        }
      }
      seat.render(rowContainer);
    });
  }
}
