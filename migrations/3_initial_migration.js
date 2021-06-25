const SCCIdoContract = artifacts.require("SCCIdoContract");

module.exports = function (deployer) {
  let eth = 10**18;
  deployer.deploy(SCCIdoContract, "0xD9462E348B02312917a34eAB6eCB79AfcC56239e", "0xC7f6752F9f6607337B804a8f6c52CeFC66b90a41",
	1624118400, 1624118400, 1624118400, 1624118400, {value:eth});
};
