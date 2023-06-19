const expect = require("chai").expect;
const companyAdministration = require("../Exam  Prep/Js Advanced Final Retake Exam - 10 December 2021/01. Service/companyAdministration");

describe("companyAdministration", function () {
  it("hiringEmployee", function () {

    expect(companyAdministration.hiringEmployee('gosho', 'Programmer', 3)).to.equal('gosho was successfully hired for the position Programmer.')
    expect(companyAdministration.hiringEmployee('nasko', 'Programmer', 1)).to.equal('nasko is not approved for this position.')
    expect(() => companyAdministration.hiringEmployee('gosho', 'asd', 3)).to.throw('We are not looking for workers for this position.')
  });
  it("calculateSalary", function () {
    expect(companyAdministration.calculateSalary(5)).to.equal(75)
    expect(companyAdministration.calculateSalary(300)).to.equal(5500)
    expect(() => companyAdministration.calculateSalary(-25)).to.throw('Invalid hours')
    expect(() => companyAdministration.calculateSalary('string')).to.throw('Invalid hours')
    
  });

  it("firedEmployee", function () {
    expect(companyAdministration.firedEmployee(['gosho', 'pesho'], 1)).to.equal('gosho')
    expect(companyAdministration.firedEmployee(['gosho', 'pesho','nasko'], 2)).to.equal('gosho, pesho')
    expect(() => companyAdministration.firedEmployee('something', 2)).to.throw('Invalid input')
    expect(() => companyAdministration.firedEmployee(['gosho', 'pesho','nasko'], 2.5)).to.throw('Invalid input')
    expect(() => companyAdministration.firedEmployee(['gosho', 'pesho','nasko'], -1)).to.throw('Invalid input')
    expect(() => companyAdministration.firedEmployee(['gosho', 'pesho','nasko'], 5)).to.throw('Invalid input')
  });
});
