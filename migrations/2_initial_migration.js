const SCCToken= artifacts.require("SCCToken2");
const SCCIdoContract = artifacts.require("SCCIdoContract");

module.exports = function (deployer) {
  let reset = deployer.deploy(SCCToken);
  console.log(reset);
  // deployer.deploy(SCCIdoContract, "0x998aa37c52b5D313a5386eC988D7503ADDc0540B");
};
