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

  randomReservation(ammount = 0) {
    if (ammount < 0.2) {
      console.error(
        "The amount of reserved seat must be over 20% of the entire seats!"
      );
    } else {
      const allSeats = this.getAllSeats();
      const seatNr = allSeats.length;
      do {
        allSeats[Math.round(Math.random() * (seatNr - 1))].setOccupied(
          "Random"
        );
      } while (
        auditorium.getOccupiedSeats().length <= Math.ceil(seatNr * ammount)
      );
    }
  }

  reserve({ min, max }) {
    const sectorsOrdered = this.sectors.sort((a, b) => {
      a.sectorPreference - b.sectorPreference;
    });
    let results = [];
    sectorsOrdered.forEach((sector) => {
      sector.rows.forEach((row) => {
        for (let i = 0; i < row.seatsNumber - max + 1; i++) {
          const nextNeighbours = row.seats.slice(i, i + max);
          const isAllFree = nextNeighbours
            .map((seat) => seat.occupied)
            .every((seat) => !seat);
          if (isAllFree) {
            const neighboursPrice = nextNeighbours
              .map((seat) => 4 - seat.seatCategory.category)
              .reduce((sum, category) => sum + category);

            const seatText = nextNeighbours
              .map((seat) => seat.seatNr + 1)
              .join(", ");
            const neighboursText = `Sector: ${nextNeighbours[0].sectorName} | row#: ${nextNeighbours[0].rowNr} | seat#: ${seatText}`;
            const positionIndex =
              nextNeighbours
                .map((seat) => seat.seatPosPreference)
                .reduce((a, b) => a + b) / max;
            const rowNumber = row.rowNr + 1;
            const sectorPreference = sector.sectorPreference;
            const positionvalue =
              rowNumber *
              sector.sectorPreference *
              positionIndex *
              neighboursPrice;
            results.push({
              neighbours: nextNeighbours,
              seatNumbers: seatText,
              neighboursText,
              setorName: sector.name,
              rowNumber,
              sectorPreference,
              positionIndex,
              neighboursPrice,
              positionvalue,
            });
          }
        }
      });
    });
    console.table(results.sort((a, b) => a.positionvalue - b.positionvalue));
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
