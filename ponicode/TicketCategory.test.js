const rewire = require("rewire");
const TicketCategoryFile = rewire("../TicketCategory");
const TicketCategory = TicketCategoryFile.__get__("TicketCategory");
// @ponicode
describe("TicketCategory.getPrice", () => {
  let inst;

  beforeEach(() => {
    inst = new TicketCategory();
  });

  test("0", () => {
    let result = inst.getPrice();
    expect(result).toMatchSnapshot();
  });
});
