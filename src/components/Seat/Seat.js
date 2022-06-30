/* This is the object of the seat, every seat know that in which auditory / sector / row placed, every seat knows the price of the ticket that is valid for it */
class Seat {
  constructor({
    seatNr,
    seatCategory,
    guestName,
    sectorId,
    rowNr,
    sectorName,
    seatPosPreference,
    sectorPreference,
  }) {
    this.seatNr = seatNr;
    this.seatDOM = null;
    this.sectorId = sectorId;
    this.sectorName = sectorName;
    this.rowNr = rowNr;
    this.seatPosPreference = seatPosPreference;
    this.sectorPreference = sectorPreference;
    guestName ? this.setOccupied(guestName) : this.setFree();
    this.seatCategory = new TicketCategory(seatCategory);
    return this;
  }

  //rendering the seat
  render(parent) {
    this.seatDOM = createDOMElem({
      tag: div,
      attrs: {
        class: `seat seatNr-${this.seatNr} category-${
          this.seatCategory.category
        } ${this.occupied ? "occupied" : "free"}`,
      },
      parent: parent,
      content: this.seatNr + 1,
      handleEvent: {
        event: "click",
        cb: (e) => {
          e.preventDefault();
          this.occupied ? this.setFree() : this.setOccupied("Test");
        },
      },
    });
  }

  //this method gives back the number of the seat (ID)
  getNumber() {
    return this.seatNr;
  }

  //this method gives back the name of the guest who is sitting on it
  getGuestName() {
    return this.guestName;
  }

  //this method set the name of the guest who is sitting on it
  setGuestName(guestName) {
    this.guestName = guestName;
  }

  //this method gives back the price of the valid ticket for the seat
  getSeatPrice() {
    return this.seatCategory.getPrice();
  }

  //this method gives back the category of the valid ticket for the seat
  getSeatCategory() {
    return this.seatCategory.getCategory();
  }

  //this method gives back the the seat is occupied // TRUE or free /// FALSE
  getOccupied() {
    return this.occupied;
  }

  //this method set the seat to occupied // as argument we can give the name of the guest who is sitting on it
  setOccupied(guestName = "unknown") {
    this.occupied = true;
    this.setGuestName(guestName);
    if (this.seatDOM) {
      this.seatDOM.classList.add("occupied");
      this.seatDOM.classList.remove("free");
    }
    return this;
  }
  //this method set the seat to free
  setFree() {
    this.occupied = false;
    this.setGuestName(null);
    if (this.seatDOM) {
      this.seatDOM.classList.add("free");
      this.seatDOM.classList.remove("occupied");
    }
    return this;
  }
}
