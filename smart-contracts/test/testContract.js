
const { BN, shouldFail } = require('openzeppelin-test-helpers');

const Passport = artifacts.require('Passport');

contract('Passport', function ([_, pauser, wallet, other]) {
  const rate = new BN(1);
  const value = new BN(1);

  beforeEach(async function () {
    const from = pauser;

    this.passport = await Passport.new({ from: pauser });
    //this.crowdsale = await PausableCrowdsale.new(rate, wallet, this.token.address, { from });
    //await this.token.transfer(this.crowdsale.address, value.muln(2), { from });
  });

  context('Create a new user', function () {

  it('Can create a user if it is the owner', async function () {
    await this.passport.createUser(wallet, 'Elliot', { from: pauser });
  });

  it('Cannot create a user if it is not the owner', async function () {
    await shouldFail.reverting.withMessage(this.passport.createUser(wallet, 'Elliot'),
    'Error, not owner');
  });

  it('Cannot create a user if the username has already been taken', async function () {
    await this.passport.createUser(wallet, 'Elliot', { from: pauser });
    await shouldFail.reverting(this.passport.createUser(pauser, 'Elliot', { from: pauser }));
  });

  it('Cannot create a user if the address has already been taken', async function () {
    await this.passport.createUser(wallet, 'Elliot', { from: pauser });
    await shouldFail.reverting(this.passport.createUser(wallet, 'Elliiiiot', { from: pauser }));
  });
});
  context('Create a new badge', function () {
    it('Can create a badge if it is the owner', async function () {
      await this.passport.createBadge(
        'Crypto',
        'Elliot',
        '0-92-19',
        'Tech',
        {from: pauser}
      );
    });
    it('Cannot create a badge if it is not the owner', async function () {
      await shouldFail.reverting.withMessage(this.passport.createBadge(
        'Crypto',
        'Elliot',
        '0-92-19',
        'Tech'),
      'Error, not owner');
    });
    it('Cannot create a badge if the coursename is already taken', async function () {
      await this.passport.createBadge(
        'Crypto',
        'Elliot',
        '0-92-19',
        'Tech',
        {from: pauser}
      );
      await shouldFail.reverting(this.passport.createBadge(
        'Crypto',
        'Elliot',
        '0-92-19',
        'Tech',
        {from: pauser}
        )
        );
    });
  });
  context('Add badges to Users', function () {
    it('Can create a badge add it to a user', async function () {
      await this.passport.createBadge(
        'Crypto',
        'Elliot',
        '0-92-19',
        'Tech',
        {from: pauser}
      );
      await this.passport.createUser(wallet, 'Elliot', { from: pauser });
      await this.passport.addBadgeToUser(wallet, 0, { from: pauser });
    });

    it('Cannot add an invalid badge to a user', async function () {
      await this.passport.createBadge(
        'Crypto',
        'Elliot',
        '0-92-19',
        'Tech',
        {from: pauser}
      );
      await this.passport.createUser(wallet, 'Elliot', { from: pauser });
      await shouldFail.reverting.withMessage(
        this.passport.addBadgeToUser(wallet, 1, { from: pauser }),
        "Error, Badge out of bounds",
      );
    });
  });
});
