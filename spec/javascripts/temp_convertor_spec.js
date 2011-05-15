describe("TempConvertor", function(){
  it("converts 0C to 32F", function(){
    expect(window.TempConvertor).toBeDefined();
    var f = TempConvertor.cToF(0);
    expect(f).toBe(32);
  });
  it("converts 100C to 212F", function(){
    var f = TempConvertor.cToF(100);
    expect(f).toBe(212);
  });
  it("converts 4.4C to 40F", function(){
    var f = TempConvertor.cToF(4.4);
    expect(f).toBe(40);
  });
  it("converts F to C", function(){
    expect(TempConvertor.fToC(212)).toBe(100);
    expect(TempConvertor.fToC(32)).toBe(0);
    expect(TempConvertor.fToC(40)).toBe(4);
  });

  describe("UI component", function(){
    it("converts F to C", function(){
      setFixtures("<input id='fbox'/><input id='cbox'/>");
      $('#fbox').convertsFToC('#cbox');
      $('#fbox').val('32');
      $('#fbox').blur();
      expect($('#cbox').val()).toBe('0');
    });
  });
});
