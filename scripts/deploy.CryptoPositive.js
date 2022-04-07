const { ethers, upgrades } = require("hardhat");

async function main() {
  let owner, account1, account2, account3;
  [owner, account1, account2, account3] = await ethers.getSigners();

  // We get the contract to deploy
  const CryptoPositiveFactory = await ethers.getContractFactory("CryptoPositive",
  {
    libraries: {
        // IterableMapping:'0x8826429F705D043501E1B3659A4d96d2540285ED' // test
        IterableMapping:'0x8DFA255c782715dDf6A0f910a2C2f208a59e152E'
    }}
  );
  const CryptoPositive = await CryptoPositiveFactory.deploy();
  await CryptoPositive.deployed();
  console.log("CryptoPositive deployed to:", CryptoPositive.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
