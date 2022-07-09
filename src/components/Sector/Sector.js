import Row from "../Row/Row.js";
import { createDOMElem, div, p } from "../../utils/domelem.js";

/* Object of a sector, the sector holds the porperties of the auditorium what containg the sector, and all the properties are given down to the rows. */
export default class Sector {
  constructor({
    rows,
    name,
    mirrored,
    sectorId,
    vert,
    hor,
    angle,
    offset,
    sectorPreference,
  }) {
    this.rows = [];
    this.name = name;
    this.vert = vert;
    this.hor = hor;
    this.angle = angle;
    this.sectorId = sectorId;
    this.mirrored = mirrored;
    this.seatNumber = 0;
    this.offset = offset;
    this.sectorPreference = sectorPreference;

    //here is created all the rows according to the maps of the sector
    rows.forEach((rowConf, rowNr) => {
      const row = new Row({
        rowConf,
        rowNr,
        sectorId,
        sectorName: name,
        sectorPreference,
      });

      //here is calculated the number of the seat is all of the rows.
      this.seatNumber += row.seatNumber;
      this.rows.push(row);
      return this;
    });
  }

  //this method gives back all the seats in a flat array of an entire sector
  getAllSeats() {
    return this.rows.map((row) => row.getAllSeats()).flat(1);
  }

  getLongestRow() {
    let maxLength = 0;
    this.rows.forEach((row) => {
      maxLength = maxLength < row.seatsNumber ? row.seatsNumber : maxLength;
    });
    return maxLength;
  }

  //this method gives back all the occupied seats in a flat array of an entire sector
  getOccupiedSeats() {
    return this.rows.map((row) => row.getOccupiedSeats()).flat(1);
  }

  //this method gives back all the free seats in a flat array of an entire sector
  getFreeSeats() {
    return this.rows.map((row) => row.getFreeSeats()).flat(1);
  }

  //this method renders the entire sector
  render(parent) {
    const sectorContainer = createDOMElem({
      tag: div,
      attrs: {
        class: `sector-container ${this.name
          .replaceAll(" ", "-")
          .replaceAll(".", "")}`,
        id: `sectorId-${this.sectorId}`,
      },
      //here forced some styling throug the javascript, because the positions comes from the sectorConfig literal object, please see in the model directory
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

    //rendering the rows in the sector
    this.rows.forEach((row) => {
      row.render(sectorContainer, this.mirrored, this.offset);
    });
  }
}
