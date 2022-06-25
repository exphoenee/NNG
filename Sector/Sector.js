class Sector {
  constructor({ rows, name, mirrored, sectorId }) {
    this.rows = [];
    this.name = name;
    this.sectorId = sectorId;
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
        id: `sectorId-${this.sectorId}`,
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
    });
  }
}
