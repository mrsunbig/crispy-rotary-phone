var GAAPToken = artifacts.require("GAAPToken");
module.exports = deployer => {
    deployer.deploy(GAAPToken, 1000000000);
};