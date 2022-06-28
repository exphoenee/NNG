class Seat {
  constructor({
    seatNr,
    seatCategory,
    guestName,
    sectorId,
    rowNr,
    sectorName,
    seatPreference,
    sectorPreference,
  }) {
    this.seatNr = seatNr;
    this.seatDOM = null;
    this.sectorId = sectorId;
    this.sectorName = sectorName;
    this.rowNr = rowNr;
    this.seatPreference = seatPreference;
    this.sectorPreference = sectorPreference;
    guestName ? this.setOccupied(guestName) : this.setFree();
    this.seatCategory = new TicketCategory(seatCategory);
    return this;
  }

  render(parent) {
    this.seatDOM = createDOMElem({
      tag: div,
      attrs: {
        class: `seat seatNr-${this.seatNr} category-${
          this.seatCategory.seatCategory
        } ${this.occupied ? "occupied" : "free"}`,
      },
      parent: parent,
      content: this.seatNr + 1,
      handleEvent: {
        event: "click",
        cb: (e) => {
          e.preventDefault();
          //console.log("clicked", this);

          this.occupied ? this.setFree() : this.setOccupied("Test");

          if (this.occupied) {
          } else {
          }
        },
      },
    });
  }

  getNumber() {
    return this.seatNr;
  }

  getGuestName() {
    return this.guestName;
  }
  setGuestName(guestName) {
    this.guestName = guestName;
  }

  getSeatPrice() {
    return this.seatCategory.getPrice();
  }

  getSeatCategory() {
    return this.seatCategory.getCategory();
  }

  getTicketPrice() {
    return this.seatCategory;
  }

  getOccupied() {
    return this.occupied;
  }
  setOccupied(guestName = "unknown") {
    console.log(this);
    this.occupied = true;
    this.setGuestName(guestName);
    if (this.seatDOM) {
      this.seatDOM.classList.add("occupied");
      this.seatDOM.classList.remove("free");
    }
    return this;
  }

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
