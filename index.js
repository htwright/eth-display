var Web3 = require('web3');

// var web3 = new Web3('ws://localhost:8080');
// console.log(web3.eth);
let web3;
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
// console.log(web3.eth.getBalance(''));
console.log(web3.eth);
// web3.eth.getBalance('').then((data, error) => {if(!error){console.log(data);}else{console.log(error);}});
// web3.eth.getCoinbase((error, result)=>{ console.log(result || error) });
