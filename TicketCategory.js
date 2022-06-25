class TicketCategory {
  constructor(seatCategory) {
    this.seatCategory = seatCategory;
    this.priceList = {};
  }

  getPrice() {
    return this.priceList[this.seatCategory];
  }
}
