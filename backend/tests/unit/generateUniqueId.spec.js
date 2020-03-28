const generateUniqueId = require("../../src/utils/generateUniqueId");

// Definindo uma categoria para o teste, pois poderemeos testar várias funcionalidades no mesmo arquivo
describe("Generate Unique ID", () => {
  it("should generate an unique ID", () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});
