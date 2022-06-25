class Seat {
  constructor({ number, seatCategory, guestName }) {
    this.number = number;
    guestName ? this.setOccupied(guestName) : this.setFree();
    this.seatCategory = new TicketCategory(seatCategory);
    return this;
  }

  getNumber() {
    return this.number;
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
    this.occupied = true;
    this.setGuestName(guestName);
    return this;
  }

  setFree() {
    this.occupied = false;
    this.setGuestName(null);
    return this;
  }
}
