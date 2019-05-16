$(document).ready(() => {
  if (typeof web3 !== 'undefined') {
   web3 = new Web3(web3.currentProvider);
}
else {
   // set the provider you want from Web3.providers
   web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
  }

web3.eth.getAccounts((req, res) => {
   account = res
   $('#grab').html(account)
 });

    window.addEventListener('load', function() {
      if (web3.currentProvider.isMetaMask === true) {
      } else {
        document.body.innerHTML = $('#toast');
      }
  })
})

$(document).change(() => {

  if (typeof web3 !== 'undefined') {
   web3 = new Web3(web3.currentProvider);
  } else {
   // set the provider you want from Web3.providers
   web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
  }

  web3.eth.getAccounts((req, res) => {
    account = res
    console.log(account[0]);
    $('#grab').html(account)
  });
})
