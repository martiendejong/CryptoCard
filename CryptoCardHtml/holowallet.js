// wallet.js
const hc = require('holochain-client');

// Replace with your own Holochain testnet DNA and agent ID
const dna = 'YOUR_DNA';
const agentId = 'YOUR_AGENT_ID';

// Connect to the Holochain network
const conductorApiUrl = 'http://localhost:8888';
hc.connect(conductorApiUrl).then(() => {
  // Get the current balance of the wallet
  hc.callZome({
    dna: dna,
    zome: 'wallet',
    func: 'get_balance',
    payload: { agent: agentId })
	.then((response) => {
    // Display the balance on the page
    document.getElementById('balance').innerHTML = response.Ok;

    // Display the address on the page
    hc.callZome({
      dna: dna,
      zome: 'wallet',
      func: 'get_address',
      payload: { agent: agentId }
    }).then((response) => {
      document.getElementById('address').innerHTML = response.Ok;
    }).catch((error) => {
      console.error(error);
    });
  }).catch((error) => {
    console.error(error);
  });
}).catch((error) => {
  console.error(error);
});

// Send a transaction when the form is submitted
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the recipient address and amount from the form
  const recipient = document.getElementById('recipient').value;
  const amount = document.getElementById('amount').value;

  // Send the transaction using the Holochain client
  hc.callZome({
    dna: dna,
    zome: 'wallet',
    func: 'send_money',
    payload: {
      agent: agentId,
      recipient: recipient,
      amount: amount
    }
  }).then((response) => {
    console.log(`Transaction sent: ${response.Ok}`);
  }).catch((error) => {
    console.error(error);
  });
});