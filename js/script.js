const Web3Modal = window.Web3Modal.default;
const providerOptions = {
    /* See Provider Options Section */
};
const web3Modal = new Web3Modal({
   network: "mainnet", // optional
   cacheProvider: true, // optional
   providerOptions // required
});

let provider;
let web3;

$(window).on("load", async function (e) {

  $('#metamask').on('click', async function() {
     provider = await web3Modal.connect();
     web3 = new Web3(provider);
     let accounts = await web3.eth.getAccounts();
     $('.account').text(accounts[0].slice(0,5) + "..." + accounts[0].slice(-5));
  });

  setInterval(async function() {
    if(web3) {
      accounts = await web3.eth.getAccounts();
      if(accounts.length === 0) {
        $('.account').text('Connect');
      }
    }
  }, 3000);

});
