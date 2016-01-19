describe ('triangle', function() {
  it("is not a triangle if two sides sum to less than or equal to the third side", function() {
    expect (triangle(2,3,6)).to.equal("Not a triangle")
  });
});
