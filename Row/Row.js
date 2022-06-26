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

  render(parent, rowNr, mirrored = false) {
    const rowContainer = createDOMElem({
      tag: div,
      attrs: {
        class: `row rowNr-${rowNr} row-container`,
      },
      content: `row: ${rowNr + 1}`,
      parent: parent,
    });

    const toRender = mirrored ? this.seat.reverse() : this.seat;
    toRender.forEach((seat) => {
      createDOMElem({
        tag: div,
        attrs: {
          class: `seat seatNr-${seat.number} category-${
            seat.seatCategory.seatCategory
          } ${seat.occupied ? "occupied" : "free"}`,
        },
        parent: rowContainer,
        content: seat.number + 1,
        handleEvent: {
          event: "click",
          cb: (e) => {
            e.preventDefault();
            console.log("clicked", e.target);

            seat.occupied ? seat.setFree() : seat.setOccupied("Lali");

            if (seat.occupied) {
              e.target.classList.add("occupied");
              e.target.classList.remove("free");
            } else {
              e.target.classList.add("free");
              e.target.classList.remove("occupied");
            }
          },
        },
      });
    });
  }
}
