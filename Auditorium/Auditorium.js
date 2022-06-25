class Auditorium {
  constructor(sectors) {
    this.sectors = [];
    sectors.forEach((sectorConf) => {
      this.sectors.push(new Sector(sectorConf));
    });
    return this;
  }

  render() {
    this.sectors.forEach((sector) => {
      sector.render();
    });
  }
}
