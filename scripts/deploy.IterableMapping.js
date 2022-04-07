const { ethers, upgrades } = require("hardhat");

async function main() {
  // We get the contract to deploy
  const IterableMappingFactory = await ethers.getContractFactory("IterableMapping");

  const iterableMapping = await IterableMappingFactory.deploy();
  await iterableMapping.deployed();
  console.log("IterableMapping deployed to:", iterableMapping.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
