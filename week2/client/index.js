const axios = require('axios');
const niceList = require('../utils/niceList.json');
const prompt = require("prompt-sync")();

const serverUrl = 'http://localhost:1225';

async function main() {

  const name = prompt("Which name do you want to check?");
  if(name == null){
    alert("You have to type a name");
  }

 
  const index = niceList.findIndex(n => n === name);
  const proof = merkleTree.getProof(index);

  // send the name and proof to the server
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof
  });

  console.log({ gift });
}

main();