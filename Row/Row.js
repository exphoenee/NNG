class Row {
  constructor({ rowConf, rowNr }) {
    this.seat = [];
    this.rowNr = rowNr + 1;
    this.seatNumber = rowConf.length;
    rowConf.forEach((category, seatNr) => {
      const row = new Seat({ number: seatNr, seatCategory: category });
      this.seat.push(row);
    });
    return this;
  }

  render(parent, mirrored, offset) {
    const rowContainer = createDOMElem({
      tag: div,
      attrs: {
        class: `row rowNr-${this.rowNr} row-container`,
      },
      content: `${this.rowNr}${trt[this.rowNr] || trt.default} row`,
      parent: parent,
    });

    const toRender = mirrored ? this.seat.reverse() : this.seat;

    toRender.forEach((seat, index) => {
      seat.render(rowContainer);
      if (offset > 0 && index == toRender.length - 1) {
        console.log(index);
        for (let i = 0; i < this.rowNr - 1; i++) {
          console.log(i);
          createDOMElem({
            tag: div,
            attrs: { class: "offset" },
            parent: rowContainer,
          });
        }
      }
    });
  }
}
