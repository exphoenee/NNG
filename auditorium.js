class Auditorium {
  constructor(rows) {
    this.seatRow = [];
    rows.forEach((rowLength, rowNr) => {
      for (let seatNr = 0; seatNr < rowLength; seatNr++) {
        this.seatRow[rowNr][seatNr] = new Seat({ number: seatNr });
      }
    });
    return this;
  }
}
