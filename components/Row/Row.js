class Row {
  constructor({ rowConf, rowNr, sectorId, sectorName }) {
    this.seats = [];
    this.rowNr = rowNr;
    this.sectorId = sectorId;
    this.seatsNumber = rowConf.length;
    this.sectorName = sectorName;
    rowConf.forEach((category, seatNr) => {
      const thisSeat = new Seat({
        seatNr: seatNr,
        sectorId: sectorId,
        rowNr: rowNr,
        seatCategory: category,
        sectorName: sectorName,
      });
      this.seats.push(thisSeat);
    });
    return this;
  }

  getAllSeats() {
    return this.seats;
  }
  getOccupiedSeats() {
    return this.seats.filter((seat) => seat.occupied);
  }

  getFreeSeats() {
    return this.seats.filter((seat) => !seat.occupied);
  }

  render(parent, mirrored, offset) {
    const rowContainer = createDOMElem({
      tag: div,
      attrs: {
        class: `row rowNr-${this.rowNr} row-container`,
      },
      content: `${this.rowNr + 1}${trt[this.rowNr] || trt.default} row`,
      parent: parent,
    });

    const toRender = mirrored ? this.seats.reverse() : this.seats;

    toRender.forEach((seat, index) => {
      seat.render(rowContainer);
      if (offset > 0 && index == toRender.length - 1) {
        for (let i = 0; i < this.rowNr - 1; i++) {
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
