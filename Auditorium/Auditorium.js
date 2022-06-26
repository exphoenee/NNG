class Auditorium {
  constructor(sectors) {
    this.sectors = [];
    this.seatNumber = 0;
    sectors.forEach((sectorConf, index) => {
      const sector = new Sector({ ...sectorConf, sectorId: index });
      this.seatNumber += sector.seatNumber;
      this.sectors.push(sector);
    });

    return this;
  }

  render() {
    this.sectors.forEach((sector) => {
      sector.render();
    });
  }
}
