class Seat {
  constructor({ number, ticketPrice, occupied, guestName }) {
    this.number = number;
    this.ticketPrice = ticketPrice;
    this.occupied = occupied;
    this.guestName = guestName;
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

  getTicketPrice() {
    return this.ticketPrice;
  }

  getOccupied() {
    return this.occupied;
  }
  setOccupied(guestName = "unknown") {
    this.occupied = true;
    this.setGuestName(guestName);
  }
  setFree() {
    this.occupied = false;
    this.setGuestName(null);
  }
}
