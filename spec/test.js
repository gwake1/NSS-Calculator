/* global describe, it */

;(function(){
  'use strict';

  beforeEach(function(){
    previousResult = undefined;
    nextOperation = undefined;
    $('#displayoutput').val('');
  });

  function type(){
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(arg){
      press(arg);
    });
  }

  describe('Entering numbers', function(){

    describe('displayoutput', function(){
      it('should return the value of the display', function(){
        $('#displayoutput').val(1.23);
        assert.equal(displayOutput(), 1.23);

        $('#displayoutput').val(2.34);
        assert.equal(displayOutput(), 2.34);
      })
    })

    describe('type', function(){
      it('should display the number typeed', function(){
        assert.equal(displayOutput(), '');
        type(1);
        assert.equal(displayOutput(), 1);
      })
    })

    describe('Entering the decimal number 7 . 8 9', function(){
      it('should display 7.89', function(){
        type(7);
        type('.');
        type(8);
        type(9);
        assert.equal(displayOutput(), 7.89);
      });
    });
  });

  describe('Inverse', function () {
    describe('1 ± =', function(){
      it('should be -1', function () {
        type(1, '±', '=');
        assert.equal(displayOutput(), '-1');
      });
    });
    describe('± 1 =', function(){
      it('should be -1', function () {
        type('±',1, '=');
        assert.equal(displayOutput(), '-1');
      });
    });
    describe('8 ± =', function(){
      it('should be -8', function () {
        type(8, '±', '=');
        assert.equal(displayOutput(), '-8');
      });
    });
    describe('± 1 / 1 =', function(){
      it('should be -1', function () {
        type('±', 1, '/', 1, '=');
        assert.equal(displayOutput(), '-1');
      });
    });
    describe('1 ± / 1 =', function(){
      it('should be -1', function () {
        type(1, '±', '/', 1, '=');
        assert.equal(displayOutput(), '-1');
      });
    });
    describe('1 / -1 =', function(){
      it('should be -1', function () {
        type(1, '/', '±', 1, '=');
        assert.equal(displayOutput(), '-1');
      });
    });
    describe('1 / - 1 =', function(){
      it('should be -1', function () {
        type(1, '/', 1, '+/-', '=');
        assert.equal(displayOutput(), '-1');
      });
    });
  });

  describe('Dividing', function () {
    describe('1 / 1 =', function(){
      it('should be 1', function () {
        type(1, '/', 1, '=');
        assert.equal(displayOutput(), '1');
      });
    });
    describe("2 / 1", function(){
      it("should be 2", function(){
        type(2, "/", 1, "=");
        assert.equal(displayOutput(), "2");
      });
    });
    describe("0 / 1", function(){
      it("should be 0", function(){
        type(0, "/", 1, "=");
        assert.equal(displayOutput(), "0");
      });
    });
    describe("1 / 0", function(){
      it("should be undefined", function(){
        type(1, "/", 0, "=");
        assert.equal(displayOutput(), 'Infinity');
      });
    });
  });

  describe('Subtracting', function () {
    describe('7 . 8 9 + 1 - 2 =', function(){
      it('should be 10.89', function () {
        type(7, '.', 8, 9, '+', 1, '-', 2, '=');
        assert.equal(displayOutput(), '6.89');
      });
    });
    describe('7 . 8 9 - 4 = - 2 =', function(){
      it('should be 1.89', function () {
        type(7, '.', 8, 9, '-', 4, '=', '-', 2, '=');
        assert.equal(displayOutput(), '1.89');
      });
    });
    describe('7 . 8 9 - 4 - 2 =', function(){
      it('should be 1.89', function () {
        type(7, '.', 8, 9, '-', 4, '-', 2, '=');
        assert.equal(displayOutput(), '1.89');
      });
    });
    describe('7 . 8 9 - 1 . 0 5 - 2 =', function(){
      it('should be 4.94', function () {
        type(7, '.', 8, 9, '-', 1, '.', 0, 5, '-', 2, '=');
        assert.equal(displayOutput(), '4.84');
      });
    });
    describe('7 . 8 9 - 1 . 0 0 - 2 =', function(){
      it('should be 4.89', function () {
        type(7);
        type('.');
        type(8);
        type('9');
        type('-');
        type(1);
        type('.');
        type(0);
        type(0);
        type('-');
        type(2);
        type('=');
        assert.equal(displayOutput(), '4.89');
      });
    });
    describe('2 - 1 =', function(){
      it('should be 1', function () {
        type(2);
        type('-');
        type(1);
        type('=');
        assert.equal(displayOutput(), '1');
      });
    });
    describe('. 2 - . 1 =', function(){
      it('should be 0.1', function () {
        type('.');
        type(2);
        type('-');
        type('.');
        type(1);
        type('=');
        assert.equal(displayOutput(), '0.1');
      });
    });
  });

  describe('Multiplying', function(){
    describe('2 * 3 =', function(){
      it('should be 6', function(){
        type(2, '*', 3, '=')
        assert.equal(displayOutput(), '6');
      });
    });

    describe('1 * . 2 = .2', function(){
      it('should be .2', function(){
        type(1, '*', '.', 2, '=')
        assert.equal(displayOutput(), '0.2');
      });
    });

    describe('. 1 2 5 * . 5 =', function(){
      it('should be .0625', function(){
        type('.', 1, 2, 5, '*', '.', 5, '=')
        assert.equal(displayOutput(), '0.0625');
      });
    });

    describe('0 * 3 =', function(){
      it('should be .0', function(){
        type(0, '*', 3, '=');
        assert.equal(displayOutput(), '0');
      });
    });

    describe('3 . 1 4 * 0 =', function(){
      it('should be .0', function(){
        type(3, '.', 1, 4, '*', 0, '=')
        assert.equal(displayOutput(), '0');
      });
    });

    describe('3 . 1 4 * . 0 =', function(){
      it('should be 0', function(){
        type(3, '.', 1, 4, '*', '.', 0, '=')
        assert.equal(displayOutput(), '0');
      });
    });

    describe('3 * 4 * 2 =', function(){
      it('should be 24', function(){
        type(3, '*', 4, '*', 2, '=')
        assert.equal(displayOutput(), '24');
      });
    });

    describe('3 * 4 + 2 =', function(){
      it('should be 14', function(){
        type(3, '*', 4, '+', 2, '=')
        assert.equal(displayOutput(), '14');
      });
    });

    describe('7 + 6 * 5 =', function(){
      it('should be 65', function(){
        type(7, '+', 6, '*', 5, '=')
        assert.equal(displayOutput(), '65');
      });
    });

    describe('3 * 0 * 2 =', function(){
      it('should be 0', function(){
        type(3, '*', 0, '*', 2, '=')
        assert.equal(displayOutput(), '0');
      });
    });
  });

  describe('Adding', function () {
    describe('7 . 8 9 + 1 + 2 =', function(){
      it('should be 10.89', function () {
        type(7, '.', 8, 9, '+', 1, '+', 2, '=');
        assert.equal(displayOutput(), '10.89');
      });
    });
    xdescribe('7 . 8 9 + 1 = + 2 =', function(){
      it('should be 10.89', function () {
        type(7, '.', 8, 9, '+', 1, '=', '+', 2, '=');
        assert.equal(displayOutput(), '10.89');
      });
    });
    describe('7 . 8 9 + 4 + 2 =', function(){
      it('should be 13.89', function () {
        type(7, '.', 8, 9, '+', 4, '+', 2, '=');
        assert.equal(displayOutput(), '13.89');
      });
    });
    describe('7 . 8 9 + 1 . 0 5 + 2 =', function(){
      it('should be 10.94', function () {
        type(7, '.', 8, 9, '+', 1, '.', 0, 5, '+', 2, '=');
        assert.equal(displayOutput(), '10.94');
      });
    });
    describe('7 . 8 9 + 1 . 0 0 + 2 =', function(){
      it('should be 10.89', function () {
        type(7);
        type('.');
        type(8);
        type('9');
        type('+');
        type(1);
        type('.');
        type(0);
        type(0);
        type('+');
        type(2);
        type('=');
        assert.equal(displayOutput(), '10.89');
      });
    });
    describe('1 + 1 =', function(){
      it('should be 2', function () {
        type(1);
        type('+');
        type(1);
        type('=');
        assert.equal(displayOutput(), '2');
      });
    });
    describe('. 1 + . 2 =', function(){
      it('should be 0.3', function () {
        type('.');
        type(1);
        type('+');
        type('.');
        type(2);
        type('=');
        assert.equal(displayOutput(), '0.3');
      });
    });
    describe('. 1 1 1 1 1 1 1 1 + . 2 2 2 2 2 2 2 2 =', function(){
      it('should be 0.3', function () {
        type('.');
        type(1);
        type(1);
        type(1);
        type(1);
        type(1);
        type(1);
        type(1);
        type(1);
        type('+');
        type('.');
        type(2);
        type(2);
        type(2);
        type(2);
        type(2);
        type(2);
        type(2);
        type(2);
        type('=');
        assert.equal(displayOutput(), '0.33333333');
      });
    });
  });
})();
