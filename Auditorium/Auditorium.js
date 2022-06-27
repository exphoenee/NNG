class Auditorium {
  constructor(sectors) {
    this.sectors = [];
    this.seatNumber = 0;
    sectors.forEach((sectorConf, sectorId) => {
      const sector = new Sector({ ...sectorConf, sectorId });
      this.seatNumber += sector.seatNumber;
      this.sectors.push(sector);
    });

    return this;
  }

  render(parent = "app") {
    const auditoriumElem = createDOMElem({
      tag: div,
      attrs: { class: "auditorium" },
      parent: parent,
    });
    this.sectors.forEach((sector) => {
      sector.render(auditoriumElem);
    });
  }
}
