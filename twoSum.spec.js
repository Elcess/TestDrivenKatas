const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Is a function', () => {
    expect(typeof twoSum).to.be('function');
  });
  it('Returns empty array if empty array was provided', () => {
    expect(twoSum([], 10)).to.deep.equal([]);
  });
  xit('Returns the indices of the addends in an array', () => {
    expect(twoSum([], 10)).to.equal([]);
  });
});
