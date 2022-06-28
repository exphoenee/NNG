const rewire = require("rewire");
const RowFile = rewire("../Row");
const Row = RowFile.__get__("Row");
// @ponicode
describe("Row.getOccupied", () => {
  let inst;

  beforeEach(() => {
    inst = new Row();
  });

  test("0", () => {
    let result = inst.getOccupied();
    expect(result).toMatchSnapshot();
  });
});
