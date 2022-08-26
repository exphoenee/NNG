import Row from "../Row/Row.js";
import { createDOMElem, div, p } from "../../utils/domelem.js";

/* Object of a sector, the sector holds the porperties of the auditorium what containg the sector, and all the properties are given down to the rows. */
export default class Sector {
  #rows;
  #name;
  #vert;
  #hor;
  #angle;
  #sectorId;
  #mirrored;
  #offset;
  #sectorPreference;
  #seatNumber;

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
    this.#rows = [];
    this.#name = name;
    this.#sectorId = sectorId;
    this.#vert = vert;
    this.#hor = hor;
    this.#angle = angle;
    this.#mirrored = mirrored;
    this.#seatNumber = 0;
    this.#offset = offset;
    this.#sectorPreference = sectorPreference;

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
      this.#seatNumber += row.seatNumber;
      this.addRow(row);
      return this;
    });
  }

  get seatNumber() {
    return this.#seatNumber;
  }

  /**
   * @param {(arg0: Row) => void} row
   */
  addRow(row) {
    this.#rows.push(row);
  }

  get rows() {
    return this.#rows;
  }

  //this method gives back all the seats in a flat array of an entire sector
  get allSeats() {
    return this.#rows.map((row) => row.allSeats).flat(1);
  }

  get longestRow() {
    let maxLength = 0;
    this.#rows.forEach((row) => {
      maxLength = maxLength < row.seatsNumber ? row.seatsNumber : maxLength;
    });
    return maxLength;
  }

  //this method gives back all the occupied seats in a flat array of an entire sector
  get occupiedSeats() {
    return this.#rows.map((row) => row.occupiedSeats).flat(1);
  }

  //this method gives back all the free seats in a flat array of an entire sector
  get freeSeats() {
    return this.#rows.map((row) => row.getFreeSeats()).flat(1);
  }

  //this method renders the entire sector
  render(parent) {
    const sectorContainer = createDOMElem({
      tag: div,
      attrs: {
        class: `sector-container ${this.#name
          .replaceAll(" ", "-")
          .replaceAll(".", "")}`,
        id: `sectorId-${this.#sectorId}`,
      },
      //here forced some styling throug the javascript, because the positions comes from the sectorConfig literal object, please see in the model directory
      style: {
        top: `${this.#vert}%`,
        left: `${this.#hor}%`,
        transform: `translate(-50%,-50%) rotate(${this.#angle || 0}deg)`,
      },
      parent: parent,
      children: [
        {
          tag: div,
          attrs: {
            class: `title`,
          },
          children: [{ tag: p, content: this.#name }],
        },
      ],
    });

    //rendering the rows in the sector
    this.#rows.forEach((row) => {
      row.render(sectorContainer, this.#mirrored, this.#offset);
    });
  }
}
