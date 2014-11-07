(function (){
  "use strict";
});

describe("Entering numbers", function(){

  beforeEach(function(){
    $("#displayoutput").val("");
  })
  describe("displayOutput", function(){
    it("should return the value of the dipsplay", function(){
      $("#displayoutput").val("1.23");
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
      assert.equal(displayOutput(), "7.89");
    });
  });


  describe("adding", function(){
    describe("7.89 + 1 + 2 = should be 10.89", function (){
      it("should be 10.89", function (){
        press('7');
        press('.');
        press("8");
        press("9");
        press("+");
        press("1");
        press("+");
        press("2");
        press("=");
        assert.equal(eval(displayOutput()), 10.89);
      })
    });
    describe("7.89 + 1.00 + 2 = should be 10.89", function (){
      it("should be 10.89", function (){
        press('7');
        press('.');
        press("8");
        press("9");
        press("+");
        press("1");
        press(".");
        press("0");
        press("0");
        press("+");
        press("2");
        press("=");
        assert.equal(eval(displayOutput()), 10.89);
      })
    });
    describe("1 + 1 should be 2", function (){
      it("1 + 1 should be 2", function(){
        press("1");
        press("+");
        press("1");
        press("=");
        assert.equal(eval(displayOutput()), 2);
      });
    });
    describe(".1 + .2 should be .3", function (){
      it(".1 + .2 = should be .3", function (){
        press(".");
        press("1");
        press("+");
        press(".");
        press("2");
        assert.equal(eval(displayOutput()), .3);
      });
    });
  });
});
