class Sector {
  constructor({ rows, name, mirrored, sectorId, vert, hor, angle, offset }) {
    this.rows = [];
    this.name = name;
    this.vert = vert;
    this.hor = hor;
    this.angle = angle;
    this.sectorId = sectorId;
    this.mirrored = mirrored;
    this.seatNumber = 0;
    this.offset = offset;
    rows.forEach((rowConf, rowNr) => {
      const row = new Row({ rowConf, rowNr, sectorId, sectorName: name });
      this.seatNumber += row.seatNumber;
      this.rows.push(row);
      return this;
    });
  }

  getAllSeats() {
    return this.rows.map((row) => row.getAllSeats()).flat(1);
  }

  getOccupiedSeats() {
    return this.rows.map((row) => row.getOccupiedSeats()).flat(1);
  }
  getFreeSeats() {
    return this.rows.map((row) => row.getFreeSeats()).flat(1);
  }

  render(parent) {
    const sectorContainer = createDOMElem({
      tag: div,
      attrs: {
        class: `sector-container ${this.name
          .replaceAll(" ", "-")
          .replaceAll(".", "")}`,
        id: `sectorId-${this.sectorId}`,
      },
      style: {
        top: `${this.vert}%`,
        left: `${this.hor}%`,
        transform: `translate(-50%,-50%) rotate(${this.angle || 0}deg)`,
      },
      parent: parent,
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

    this.rows.forEach((row) => {
      row.render(sectorContainer, this.mirrored, this.offset);
    });
  }
}
