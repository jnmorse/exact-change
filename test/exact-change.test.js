import drawer from '../src';
import expect from 'expect.js';

describe(
  'drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], '
  + '["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], '
  + '["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])'
  , function() {

  it('Should Return an Array', () => {
    let results = drawer(
      19.50,
      20.00,
      [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.10],
        ['QUARTER', 4.25],
        ['ONE', 90.00],
        ['FIVE', 55.00],
        ['TEN', 20.00],
        ['TWENTY', 60.00],
        ['ONE HUNDRED', 100.00]
      ]
    );

    expect(results).to.be.an('array');
  });
});

describe(
'drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], '
+ '["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], '
+ '["ONE HUNDRED", 0]])'
, function() {

  it('Should be a string', () => {
    let result = drawer(
      19.50,
      20.00,
      [
        ['PENNY', 0.01],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0]
      ]
    );

    expect(result).to.be.a('string');
  });

});

describe('drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], '
+ '["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], '
+ '["ONE HUNDRED", 0]])'
, function() {

  it('Should return a string', function() {
    let result = drawer(
      19.50,
      20.00,
      [
        ['PENNY', 0.50],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0]
      ]
    );

    expect(result).to.be.a('string');
  });

});

describe('drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], '
+ '["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], '
+ '["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])'
, function() {

  it('should return [["QUARTER", 0.50]]', function() {
    let result = drawer(
      19.50,
      20.00,
      [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.10],
        ['QUARTER', 4.25],
        ['ONE', 90.00],
        ['FIVE', 55.00],
        ['TEN', 20.00],
        ['TWENTY', 60.00],
        ['ONE HUNDRED', 100.00]
      ]
    );

    expect(result).to.eql([['QUARTER', 0.50]]);
  });

});

describe('drawer(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], '
+ '["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], '
+ '["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])'
, function() {

  it('should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15], '
  + '["ONE", 1], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]'
  , function() {

    let result = drawer(
      3.26,
      100.00,
      [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.10],
        ['QUARTER', 4.25],
        ['ONE', 90.00],
        ['FIVE', 55.00],
        ['TEN', 20.00],
        ['TWENTY', 60.00],
        ['ONE HUNDRED', 100.00]
      ]
    );

    expect(result).to.eql(
      [
        ['TWENTY', 60.00],
        ['TEN', 20.00],
        ['FIVE', 15],
        ['ONE', 1],
        ['QUARTER', 0.50],
        ['DIME', 0.20],
        ['PENNY', 0.04]
      ]
    );
  });

});

describe('drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], '
+ '["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0],'
+ ' ["ONE HUNDRED", 0]])'
, function() {

  it('should return "Insufficient Funds"', function() {
    let result = drawer(
      19.50,
      20.00,
      [
        ['PENNY', 0.01],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0]
      ]
    );

    expect(result).to.equal('Insufficient Funds');
  });

});

describe('drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], '
+ '["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0],'
+ ' ["ONE HUNDRED", 0]])'
, function() {

  it('should return "Insufficient Funds"', function() {
    let result = drawer(
      19.50,
      20.00,
      [
        ['PENNY', 0.01],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 1.00],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0]
      ]
    );

    expect(result).to.equal('Insufficient Funds');
  });

});

describe('drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], '
+ '["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], '
+ '["ONE HUNDRED", 0]])'
, function() {

  it('should return "Closed"', function() {
    let result = drawer(
      19.50,
      20.00,
      [
        ['PENNY', 0.50],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0]
      ]
    );

    expect(result).to.equal('Closed');
  });

});
