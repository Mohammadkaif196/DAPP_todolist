
const ABI= require("../ABI.json");
const {Web3}=require('Web3');

const web3 =new Web3("https://sepolia.infura.io/v3/4f26b6e629fe4494b514488881dccb5a")
const contractAddress="0xfaa820b8236c86eb35da348038c826c663cc8514"
const contract =new web3.eth.Contract(ABI,contractAddress);

module.exports={contract};
