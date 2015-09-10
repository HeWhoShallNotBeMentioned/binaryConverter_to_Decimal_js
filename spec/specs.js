describe("base", function() {
  it('returns 0 for a string of "0"', function() {
    expect(base("0")).to.equal(0);
  });

  it('returns 1 for a string of "1"', function() {
    expect(base("1")).to.equal(1);
  });

  it('returns 17 for a string of "10001"', function() {
    expect(base("10001")).to.equal(17);
  });
  it('returns 8758975980 for a string of "01000001010000100110101110111101100"', function() {
    expect(base("01000001010000100110101110111101100")).to.equal(8758975980);
  })
});
