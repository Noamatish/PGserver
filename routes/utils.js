const { MerkleTree } = require("merkletreejs");
const KECCAK256 = require("keccak256");
const WL = require("./address");

const buf2hex = (x) => "0x" + x.toString("hex");

const checkMerkle = (wallet) => {
  const leaves = WL.map((x) => KECCAK256(x));
  console.log(leaves);
  const tree = new MerkleTree(leaves, KECCAK256, { sortPairs: true });
  console.log(tree);
  let leaf = buf2hex(KECCAK256(wallet));
  let proof = tree.getProof(leaf).map((x) => buf2hex(x.data));
  return proof;
  //   const leaves = addresses.map((x) => keccak256(x));
  //   const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  //   const buf2hex = (x) => "0x" + x.toString("hex");
  //   console.log(buf2hex(tree.getRoot()));
  //   const leaf = keccak256(wallet); // address from wallet using walletconnect/metamask
  //   const proof = tree.getProof(leaf).map((x) => buf2hex(x.data));
  //   let leaf = buf2hex(KECCAK256(accounts[0]));
  //   let proof = tree.getProof(leaf).map((x) => buf2hex(x.data));

  //   return proof;
};

module.exports = checkMerkle;
