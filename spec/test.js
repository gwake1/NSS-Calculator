(function (){
  "use strict";
});

describe("Entering numbers", function(){
  describe("displayOutput", function(){
    it("should return the value of the dipsplay", function(){
      $("#displayOutput").val("1.23");
      assert.equal(displayOutput(), "1.23");
    });
  });
  describe("press", function(){
    it("should display the number pressed", function(){
      assert(displayOutput);
      press("1");
      assert.equal(displayOutput(), "1");
    });
  });
  describe("Entering the decimal number 7.89", function(){
    it("should display 7.89", function(){
      press('7');
      press('.');
      press("8");
      press("9");
      it("should be 7.89", function(){
        assert.equal(displayOutput(), "10.89");
        // });
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
    describe("1 + 1 should be 2", function (){
      press("1");
      press("+");
      press("1");
      press("=");
      it("should be 2", function (){
        assert(false);
      });
    });
    describe(".9 + .1 should be 1", function (){
      press(".");
      press("9");
      press("+");
      press(".1");
      it(".9 + .1 = should be 1", function (){
        assert(false);
      });
    });
  });

  describe("Subtraction", function(){
    describe("Entering 1 * 1", function(){
      assert(true)
    });
  });

  describe("Multiplication", function(){
    describe("Entering 1 * 1", function(){
      assert(true)
    });
  });

  describe("Division", function(){
    describe("Entering 1 * 1", function(){
      assert(true)
    });
  });
});
