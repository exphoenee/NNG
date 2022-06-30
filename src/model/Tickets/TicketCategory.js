/* this is the class of a ticket, i dont remember why i made this, but it works well */
export default class TicketCategory {
  constructor(seatCategory) {
    this.category = seatCategory;
    this.priceList = { 0: 2000, 1: 3000, 2: 4000, 3: 5000 };
    return this;
  }

  getPrice() {
    return this.priceList[this.seatCategory];
  }
  getCategory() {
    return this.seatCategory;
  }
  setCategory() {
    this.seatCategory = seatCategory;
    return this;
  }
}
