class Seat {
  constructor({ number, seatCategory, occupied, guestName }) {
    this.number = number;
    this.setOccupied(guestName);
    this.seatCategory = seatCategory;
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

  getSeatCategory() {
    return this.ticketPrice;
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
  }
  setFree() {
    this.occupied = false;
    this.setGuestName(null);
  }
}
