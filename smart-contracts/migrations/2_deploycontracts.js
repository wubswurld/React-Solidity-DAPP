const Passport = artifacts.require("Passport");

module.exports = function(deployer) {
  deployer.deploy(Passport);
};
