describe("Calculator", function () {
  var calculator = new Calculator();

  describe("add function", function () {
    it("should add two numbers", function () {
      expect(calculator.add(8, 8)).toBe(8 + 8);
    });
  });

  describe("subtract function", function () {
    it("should subtract two numbers", function () {
      expect(calculator.subtract(10, 2)).toBe(10 - 2);
    });
  });

  describe("multiple function", function () {
    it("should multipy two numbers", function () {
      expect(calculator.multiply(10, 3)).toBe(10 * 3);
    });
  });

  describe("divide function", function () {
    it("should divide two numbers", function () {
      expect(calculator.divide(9, 3)).toBe(9 / 3);
    });
  });
});
