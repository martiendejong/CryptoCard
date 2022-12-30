const Nimiq = Nimiq.Client;

// Initialize the Nimiq client and wait for it to be ready
Nimiq.init(() => {
  console.log('Nimiq ready');
});

// Replace with your own Nimiq testnet private key
const privateKey = 'YOUR_PRIVATE_KEY';

const keyPair = Nimiq.KeyPair.fromPrivateKey(privateKey);
const address = keyPair.publicKey.toAddress().toString();

// Display the address on the page
document.getElementById('address').innerHTML = address;

// Get the current balance of the wallet
Nimiq.Consensus.lightConsensus.accounts.get(address).then((account) => {
  // Display the balance on the page
  document.getElementById('balance').innerHTML = account.balance / 1000000;
});

// Send a transaction when the form is submitted
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the recipient address and amount from the form
  const recipient = document.getElementById('recipient').value;
  const amount = document.getElementById('amount').value;

  // Create a new transaction
  const transaction = new Nimiq.Transaction();
  transaction.value = amount * 1000000; // Convert from NIM to satoshi
  transaction.recipient = Nimiq.Address.fromString(recipient);
  transaction.fee = 1000; // Set the fee to 1 NIM
  transaction.validate();

  // Sign the transaction using the private key
  transaction.sign(keyPair);

  // Send the transaction to the Nimiq network
  Nimiq.Consensus.lightConsensus.transactions.relay(transaction).then(() => {
    console.log(`Transaction sent: ${transaction.hash().toHex()}`);
  }).catch((error) => {
    console.error(error);
  });
});