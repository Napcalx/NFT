import { ethers } from "hardhat";

async function main() {
  const [signer] = await ethers.getSigners();
  const NFT = await ethers.getContractAt(
    "NFT",
    "0x79a2EB53402466FD5fD7911B08DB2729FC8db8f8"
  );

  await NFT.mint(
    signer.address,
    "QmXt5RpeBaAdUxJrDuxQH5vfqC8ECtsjE5gotYQ54Ec2YV"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});