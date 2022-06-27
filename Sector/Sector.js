class Sector {
  constructor({ rows, name, mirrored, sectorId, vert, hor, angle }) {
    this.rows = [];
    this.name = name;
    this.vert = vert;
    this.hor = hor;
    this.angle = angle;
    this.sectorId = sectorId;
    this.mirrored = mirrored;
    this.seatNumber = 0;
    rows.forEach((rowConf, index) => {
      const row = new Row(rowConf);
      this.seatNumber += row.seatNumber;
      this.rows.push(row);
      return this;
    });
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

    this.rows.forEach((row, rowNr) => {
      row.render(sectorContainer, rowNr, this.mirrored);
    });
  }
}
