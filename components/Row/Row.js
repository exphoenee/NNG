/*
this is the object of the rows, the object gets, the properies of the Auditorium, and the Sector as well, and pass down to the seat component also for later useage
*/

class Row {
  constructor({ rowConf, rowNr, sectorId, sectorName, sectorPreference }) {
    this.seats = [];
    this.rowNr = rowNr;
    this.sectorId = sectorId;
    this.seatsNumber = rowConf.length;
    this.sectorName = sectorName;
    this.sectorPreference = sectorPreference;

    //here is the seats created in the rows
    rowConf.forEach((category, seatNr) => {
      const thisSeat = new Seat({
        seatNr: seatNr,
        sectorId: sectorId,
        rowNr: rowNr,
        sectorPreference: sectorPreference,
        seatPosPreference: Math.ceil(Math.abs(seatNr - this.seatsNumber / 2)),
        seatCategory: category,
        sectorName: sectorName,
      });
      this.seats.push(thisSeat);
    });
    return this;
  }

  //this method gives back all the seats in a flat array of an entire row
  getAllSeats() {
    return this.seats;
  }

  //this method gives back all the occupied seats in a flat array of an entire row
  getOccupiedSeats() {
    return this.seats.filter((seat) => seat.occupied);
  }

  //this method gives back all the free seats in a flat array of an entire row
  getFreeSeats() {
    return this.seats.filter((seat) => !seat.occupied);
  }

  //this method rendering the row
  render(parent, mirrored, offset) {
    //creating the row container
    const rowContainer = createDOMElem({
      tag: div,
      attrs: {
        class: `row rowNr-${this.rowNr} row-container`,
      },
      parent: parent,
    });

    //adding the text of row numbering
    const rowNumbering = createDOMElem({
      tag: p,
      attrs: {
        class: `row rowNr-${this.rowNr} row-container`,
      },
      content: `${this.rowNr + 1}${trt[this.rowNr] || trt.default} row`,
      parent: rowContainer,
    });

    //if the rows are mirrored in the sectror the revers the array
    const toRender = mirrored ? this.seats.reverse() : this.seats;

    //give some offset to the side balcony to get similar results than on the picture shown
    toRender.forEach((seat, index) => {
      seat.render(rowContainer);
      if (offset > 0 && index == toRender.length - 1) {
        for (let i = 0; i < this.rowNr; i++) {
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
