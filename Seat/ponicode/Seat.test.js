const rewire = require("rewire");
const SeatFile = rewire("../Seat");
const Seat = SeatFile.__get__("Seat");
// @ponicode
describe("Seat.getTicketPrice", () => {
  let inst;

  beforeEach(() => {
    inst = new Seat();
  });

  test("0", () => {
    let result = inst.getTicketPrice();
    expect(result).toMatchSnapshot();
  });
});
