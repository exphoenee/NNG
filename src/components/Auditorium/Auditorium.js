import Sector from "../Sector/Sector.js";
import { createDOMElem, div, input, button } from "domelemjs";
/* Object of the entire Auditorium, the constructor of the class gets an array, that is writing down, the properties of the auditorium, please see the sectorConfigs in model directory */
export default class Auditorium {
  constructor(sectors) {
    this.sectors = [];
    this.seatNumber = 0;
    this.wheighting = {
      sectorIndex: 1,
      rowNumber: 10,
      positionIndex: 100,
      neighboursPrice: 1000,
    };

    //creating the sectors according to the sectorCofigs, and sectorMaps - please see in the model
    sectors.forEach((sectorConf, sectorId) => {
      const sector = new Sector({ ...sectorConf, sectorId });

      //form the sector getting the number of seats in the sector
      this.seatNumber += sector.seatNumber;

      //push into the sectors of the auditorium
      this.sectors.push(sector);
    });

    return this;
  }

  //filling up this auditorium with occupied seats
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
      } while (this.getOccupiedSeats().length <= Math.ceil(seatNr * ammount));
    }
  }

  reserve(numberOfSeats) {
    //at very first ordering the sectors
    /* NOT NEEDED ANY MORE
    const sectorsOrdered = this.sectors.sort((a, b) => {
      a.sectorPreference - b.sectorPreference;
    });
    */

    let results = [];

    //iterating through the sectors
    this.sectors.forEach((sector) => {
      //iterating throug the rows
      sector.rows.forEach((row) => {
        const rowLength = row.seatsNumber;
        for (let i = 0; i < row.seatsNumber - numberOfSeats; i++) {
          //taking a sample form the current row to check they are free, if they are free calculating the value of this position.
          const nextNeighbours = row.seats.slice(i, i + +numberOfSeats);
          //console.log(row.seats.slice(i, i + +numberOfSeats), i, i + +numberOfSeats);

          //checking all the required seats are free?
          const isAllFree = nextNeighbours
            .map((seat) => seat.occupied)
            .every((seat) => !seat);

          if (isAllFree) {
            //calculating the price of all the seats - less value means a higher price
            const neighboursPrice =
              nextNeighbours
                .map((seat) => 4 - seat.seatCategory.category)
                .reduce((sum, category) => sum + category) /
              (numberOfSeats * 4);

            //calculating the value of the seat position in the row - less is more in the middle - more valued has more offset
            const positionIndex =
              (1 +
                nextNeighbours
                  .map((seat) => seat.seatPosPreference)
                  .reduce((a, b) => a + b)) /
              rowLength /
              2;

            //calculaing the correct row numbering
            const rowNumber = row.rowNr + 1;

            //calculating the sector index
            const sectorIndex = sector.sectorPreference / 4;

            //creating the fator object literal
            const factors = {
              rowNumber,
              sectorIndex,
              positionIndex,
              neighboursPrice,
            };

            let wheigtedFactors = { ...factors };
            Object.keys(wheigtedFactors).forEach(
              (index) =>
                (wheigtedFactors[index] =
                  factors[index] * this.wheighting[index])
            );

            //the calcualtion of global value of the position
            let positionValue = 1;
            Object.keys(wheigtedFactors).forEach(
              (index) => (positionValue += wheigtedFactors[index])
            );

            //generating text about the seat numbers
            const seatText = nextNeighbours
              .map((seat) => seat.seatNr + 1)
              .join(", ");

            //genereating text form results to make it more comfortable to read for humans
            const neighboursText = `Sector: ${nextNeighbours[0].sectorName} | row#: ${rowNumber} | seat#: ${seatText} | value: ${positionValue}`;

            //collect all results into an array
            results.push({
              //neighbours: nextNeighbours,
              //neighboursText,
              sectorName: sector.name,
              rowNumber,
              seatNumbers: seatText,
              ...wheigtedFactors,
              positionValue,
            });
          }
        }
      });
    });

    //printing out gthe results into the console log
    results.length
      ? console.table(results.sort((a, b) => a.positionValue - b.positionValue))
      : console.log("Unfortunatelly there is no solution...");
    return results;
  }

  //returning the number of the seats in this auditorium
  getSeatNumber() {
    return this.seatNumber;
  }

  //returning all the seats in this auditorium
  getAllSeats() {
    return this.sectors.map((sector) => sector.getAllSeats()).flat(1);
  }

  //returning all the occupied seats in this auditorium
  getOccupiedSeats() {
    return this.sectors.map((sector) => sector.getOccupiedSeats()).flat(1);
  }

  //returning all the free seats in this auditorium
  getFreeSeats() {
    return this.sectors.map((sector) => sector.getFreeSeats()).flat(1);
  }

  freeUpAllSeats() {
    this.getAllSeats().forEach((seat) => seat.setFree());
  }

  //rendering the complete auditorium
  render(parent = "app") {
    this.addPanel();
    //creating the div of auditorium
    const auditoriumElem = createDOMElem({
      tag: div,
      attrs: { class: "auditorium" },
      parent: parent,
    });

    //rendering every sectors
    this.sectors.forEach((sector) => {
      sector.render(auditoriumElem);
    });
  }

  addPanel() {
    createDOMElem({
      tag: div,
      attrs: { class: "panel" },
      style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        padding: "10px",
        margin: "10px",
      },
      children: [
        createDOMElem({
          tag: div,
          attrs: { class: "reserve-panel" },
          children: [
            createDOMElem({
              tag: input,
              attrs: { type: "number", id: "max", value: 4 },
              style: {
                width: "60px",
              },
            }),
            createDOMElem({
              tag: button,
              attrs: { class: "reserve" },
              handleEvent: {
                event: "click",
                cb: () => {
                  this.reserve({
                    min: 2,
                    max: +document.getElementById("max").value || 4,
                  });
                },
              },
              content: "reserve",
            }),
          ],
        }),
        createDOMElem({
          tag: div,
          attrs: { class: "reserve-panel" },
          children: [
            createDOMElem({
              tag: input,
              attrs: {
                type: "number",
                step: "0.1",
                min: "0.1",
                max: "1",
                id: "random",
                value: 0.2,
              },
              style: {
                width: "60px",
              },
            }),
            createDOMElem({
              tag: button,
              attrs: { class: "randomize" },
              handleEvent: {
                event: "click",
                cb: () => {
                  this.freeUpAllSeats();
                  this.randomReservation(
                    +document.getElementById("random").value
                  );
                },
              },
              content: "randomize",
            }),
          ],
        }),
      ],
    });
  }
}
