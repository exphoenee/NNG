const rewire = require("rewire");
const app = rewire("../app");
const seat = app.__get__("seat");
// @ponicode
describe("seat.setOccupied", () => {
  let inst;

  beforeEach(() => {
    inst = new seat();
  });

  test("0", () => {
    let result = inst.setOccupied();
    expect(result).toMatchSnapshot();
  });
});
