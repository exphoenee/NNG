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

  getSeatNumber() {
    return this.seatNumber;
  }

  getAllSeats() {
    return this.sectors.map((sector) => sector.getAllSeats()).flat(1);
  }

  getOccupiedSeats() {
    return this.sectors.map((sector) => sector.getOccupiedSeats()).flat(1);
  }

  getFreeSeats() {
    return this.sectors.map((sector) => sector.getFreeSeats()).flat(1);
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
