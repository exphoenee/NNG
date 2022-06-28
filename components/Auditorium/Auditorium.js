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

  getAllSeats() {
    return this.sectors.map((sector) => sector.getAllSeats()).flat(1);
  }

  getOccupiedSeats() {
    return this.sectors.map((sector) => sector.getOccupied()).flat(1);
  }

  getFreeSeats() {
    return this.sectors.map((sector) => sector.getFree()).flat(1);
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
