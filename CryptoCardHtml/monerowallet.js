// wallet.js
const monerojs = require('monero-javascript');

// Replace with your own Monero testnet private key
const privateKey = 'YOUR_PRIVATE_KEY';

// Create a new Monero wallet using the private key
const wallet = monerojs.walletFromPrivateKey(privateKey, 'testnet');

// Display the address on the page
document.getElementById('address').innerHTML = wallet.getAddress();

// Get the current balance of the wallet
wallet.getBalance().then((balance) => {
  // Display the balance on the page
  document.getElementById('balance').innerHTML = balance;
});

// Send a transaction when the form is submitted
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the recipient address and amount from the form
  const recipient = document.getElementById('recipient').value;
  const amount = document.getElementById('amount').value;

  // Send the transaction using the MoneroJS library
  wallet.send(recipient, amount).then((txHash) => {
    console.log(`Transaction sent: ${txHash}`);
  }).catch((error) => {
    console.error(error);
  });
});