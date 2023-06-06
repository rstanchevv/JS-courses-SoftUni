const expect = require('chai').expect;
const rgbToHexColor = require('../07. Unit testing and Error handling/rgbToHexColor')

describe('Regular cases',function(){
       describe("Nominal cases(valid input)", function () {
       it("should return #FF9EAA for (255, 158, 170)", function () {
           expect(rgbToHexColor(255, 158, 170)).to.be.equal("#FF9EAA");
       });
       it("should return #0C0D0E for (12, 13, 14)", function () {
           expect(rgbToHexColor(12, 13, 14)).to.be.equal("#0C0D0E");
       });
       it("should return #000000 for (0, 0, 0)", function () {
           expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
       });
       it("should return #FFFFFF for (255, 255, 255)", function () {
           expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
       });
   });
   describe(`Special cases`, function(){
    it('return undefined red < 0', function() {
        let red = -23;
        let green = 23;
        let blue =  23;
        expect(rgbToHexColor(red,green,blue)).to.be.undefined;
    })
    it('return undefined green < 0'), function() {
        let red = 23;
        let green = -23;
        let blue =  23;
        expect(rgbToHexColor(red,green,blue)).to.be.undefined;
    }
    it('return undefined blue < 0'), function() {
        let red = 23;
        let green = 23;
        let blue =  -23;
        expect(rgbToHexColor(red,green,blue)).to.be.undefined;
    }
    it('return undefined red is floating', function() {
        let red = 2.5;
        let green = 25;
        let blue =  23;
        expect(rgbToHexColor(red,green,blue)).to.be.undefined;
    })
    it('return undefined green is floating', function() {
        let red = 25;
        let green = 2.5;
        let blue =  23;
        expect(rgbToHexColor(red,green,blue)).to.be.undefined;
    })
    it('return undefined green is floating', function() {
        let red = 25;
        let green = 25;
        let blue =  2.5;
        expect(rgbToHexColor(red,green,blue)).to.be.undefined;
    })
    it('return undefined red is > 255', function() {
        let red = 256;
        let green = 25;
        let blue =  23;
        expect(rgbToHexColor(red,green,blue)).to.be.undefined;
    })
    it('return undefined green is > 255', function() {
        let red = 24;
        let green = 256;
        let blue =  23;
        expect(rgbToHexColor(red,green,blue)).to.be.undefined;
    })
    it('return undefined blue is > 255', function() {
        let red = 24;
        let green = 23;
        let blue =  256;
        expect(rgbToHexColor(red,green,blue)).to.be.undefined;
    })
    it('return correct color', function() {
        let red = 23;
        let green = 23;
        let blue =  23;
        expect(rgbToHexColor(red,green,blue)).to.be.equal('#171717')
    })
    it('return false red is string', function(){
        let red = '100';
        let green = 23
        let blue = 23;
        expect(rgbToHexColor(red,green,blue)).to.be.undefined;
    })
    it('return false red is string', function(){
        let red = 23;
        let green = '100'
        let blue = 23;
        expect(rgbToHexColor(red,green,blue)).to.be.undefined;
    })
    it('return false red is string', function(){
        let red = 23;
        let green = 23;
        let blue = '100'
        expect(rgbToHexColor(red,green,blue)).to.be.undefined;
    })
    it(`answer contains "#" if correct`, function(){
        let red = 23;
        let green = 23;
        let blue = 23;
        expect(rgbToHexColor(red,green,blue)).to.contain('#')
    })
    it(`return correct red is 0`, function(){
        let red = 0;
        let green = 23;
        let blue = 23;
        expect(rgbToHexColor(red,green,blue)).to.contain('#')
    })
    it(`return undefined green is 0`, function(){
        let red = 23;
        let green = 0;
        let blue = 23;
        expect(rgbToHexColor(red,green,blue)).to.contain('#')
    })
    it(`return undefined blue is 0`, function(){
        let red = 23;
        let green = 23;
        let blue = 0;
        expect(rgbToHexColor(red,green,blue)).to.contain('#')
    })
    it(`return undefined blue is 0`, function(){
        let red = 255;
        let green = 23;
        let blue = 23;
        expect(rgbToHexColor(red,green,blue)).to.contain('#')
    })
    it(`return undefined blue is 0`, function(){
        let red = 23;
        let green = 255;
        let blue = 23;
        expect(rgbToHexColor(red,green,blue)).to.contain('#')
    })
    it(`return undefined blue is 0`, function(){
        let red = 23;
        let green = 23;
        let blue = 255;
        expect(rgbToHexColor(red,green,blue)).to.contain('#')
    })
    it('return answer including 0 color', function() {
        let red = 23;
        let green = 23;
        let blue =  23;
        expect(rgbToHexColor(red,green,blue)).to.length(7)
    })
    it('should return undefined', function() {
        expect(rgbToHexColor()).to.be.undefined
    })
})
})