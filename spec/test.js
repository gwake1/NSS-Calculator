(function (){
  "use strict";
})

describe("Entering numbers", function(){
  describe("Entering the decimal number 7.89", function(){
    it("should display 7.89", function(){
      press('7');
      press('.');
      press("8");
      press("9");
      it("should be 7.89", function(){
        assert(displayOutput(), "10.89");
      });
    });
  });
});

describe("adding", function(){
  describe("7.89 + 1 + 2 = should be 10.89", function (){
      press('7');
      press('.');
      press("8");
      press("9");
      press("+");
      press("1");
      press("+");
      press("2");
      press("=");
      it("should be 10.89", function (){
        assert(false);
      })
  });
  describe("7.89 + 1.00 + 2 = should be 10.89", function (){
      press('7');
      press('.');
      press("8");
      press("9");
      press("+");
      press("1.00");
      press("+");
      press("2");
      press("=");
      it("should be 10.89", function (){
        assert(false);
      })
  });
  it("1 + 1 = should be 2", function (){
    assert(false);
  });
  it(".9 + .1 = should be 1", function (){
    assert(false);
  });
});
