describe('triangleCheck', function() {
  it("is not a triangle if two sides sum to less than or equal to the third side", function() {
    expect(triangleCheck(2,3,6)).to.equal("notTriangle")
  });

  it("is an equilateral triangle when all three sides are equal length", function() {
    expect(triangleCheck(2,2,2)).to.equal("equilateralTriangle")
  });

  it("is an isosceles triangle when two sides are equal length", function () {
    expect(triangleCheck(2,2,3)).to.equal("isoscelesTriangle")
  });

  it("is a scalene triangle when no sides are equal lenth", function() {
    expect(triangleCheck(2,3,4)).to.equal("scaleneTriangle")
  });
});
