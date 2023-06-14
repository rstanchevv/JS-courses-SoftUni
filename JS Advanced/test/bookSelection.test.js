const expect = require("chai").expect;
const bookSelection = require('../Exam  Prep/bookSelection');

describe("bookSelection", function () {
  it("isGenreSuitable", function () {
    expect(bookSelection.isGenreSuitable('Thriller', 5)).to.equal('Books with Thriller genre are not suitable for kids at 5 age')
    expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable')
    expect(bookSelection.isGenreSuitable('Horror', 15)).to.equal('Those books are suitable')
    expect(bookSelection.isGenreSuitable('random', 5)).to.equal('Those books are suitable')
    expect(bookSelection.isGenreSuitable('Thriller', 5)).to.equal('Books with Thriller genre are not suitable for kids at 5 age')

  });
  it("isItAffordable", function () {
    expect(bookSelection.isItAffordable(50, 500)).to.equal('Book bought. You have 450$ left')
    expect(bookSelection.isItAffordable(50, 25)).to.equal(`You don't have enough money`)
    expect(() =>bookSelection.isItAffordable('string', 500)).to.throw('Invalid input')
    expect(() =>bookSelection.isItAffordable(500, 'string')).to.throw('Invalid input')

  });

  it("suitableTitles", function () {
    expect(bookSelection.suitableTitles([{title: '534', genre: 'horror'}], 'horror')).to.be.an('array').that.includes('534')
    expect(() => bookSelection.suitableTitles(5, 'horror')).to.throw('Invalid input')
    expect(() => bookSelection.suitableTitles(5,   5)).to.throw('Invalid input')
    expect(() => bookSelection.suitableTitles([{title: '        test', genre: 'horror'}],   5)).to.throw('Invalid input')
    expect(bookSelection.suitableTitles([{title: '534', genre: 'horror'}], 'horror')).to.be.an('array').that.includes('534')
    expect(bookSelection.suitableTitles([{title: '534', genre: 'something'}], 'horror')).to.be.an('array').that.is.empty;
    expect(bookSelection.suitableTitles([{title: '534', genre: 'horror'}], 'something')).to.be.an('array').that.is.empty;
});
});
