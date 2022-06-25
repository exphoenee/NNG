class Auditorium {
  constructor(sectors) {
    this.sectors = [];
    sectors.forEach((sectorConf, index) => {
      this.sectors.push(new Sector({ ...sectorConf, sectorId: index }));
    });
    return this;
  }

  render() {
    this.sectors.forEach((sector) => {
      sector.render();
    });
  }
}
