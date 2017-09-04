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
});
