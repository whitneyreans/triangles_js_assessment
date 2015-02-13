describe('triangle', function() {
  it("returns equilateral if the numbers entered make an equilateral triangle", function() {
    expect(triangle(4, 4, 4)).to.equal("equilateral");
  });

  it("returns isosceles if the numbers entered make an isosceles triangle", function() {
    expect(triangle(4, 4, 5)).to.equal("isosceles");
  });

  it("returns not a triangle if the numbers entered do not make a triangle", function() {
    expect(triangle(2, 2, 8)).to.equal("not a triangle");
  });
});
