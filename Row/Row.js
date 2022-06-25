class Row {
  constructor(rowConf) {
    this.seat = [];
    rowConf.forEach((category, seatNr) => {
      this.seat.push(new Seat({ number: seatNr, seatCategory: category }));
    });
    return this;
  }
}
