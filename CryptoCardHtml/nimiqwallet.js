const NimiqClient = Nimiq.Client;

// Initialize the Nimiq client and wait for it to be ready
Nimiq.init(() => {
  console.log('Nimiq ready');
});


function getPk(mnemonic) {
	const mnemonicType = Nimiq.MnemonicUtils.getMnemonicType(mnemonic); // throws on invalid mnemonic

	if (mnemonicType === Nimiq.MnemonicUtils.MnemonicType.BIP39
		|| mnemonicType === Nimiq.MnemonicUtils.MnemonicType.UNKNOWN) {
		var entropy = Nimiq.MnemonicUtils.mnemonicToEntropy(mnemonic);
		var m = Nimiq.MnemonicUtils.entropyToLegacyMnemonic(entropy);
		entropy = Nimiq.MnemonicUtils.legacyMnemonicToEntropy(m);
		return new Nimiq.PrivateKey(entropy.serialize());
	}

	if (mnemonicType === Nimiq.MnemonicUtils.MnemonicType.LEGACY
		|| mnemonicType === Nimiq.MnemonicUtils.MnemonicType.UNKNOWN) {
		var entropy = Nimiq.MnemonicUtils.legacyMnemonicToEntropy(mnemonic);
		return new Nimiq.PrivateKey(entropy.serialize());
	}
}

// Send a transaction when the form is submitted
document.querySelector('form#fetch').addEventListener('submit', (event) => {
	event.preventDefault();

	// Replace with your own Nimiq testnet private key
	//const privateKey = '';
	const recoveryPhrase = document.getElementById('recoveryphrase').value;
	
	const pk = getPk(recoveryPhrase);
	const keyPair = Nimiq.KeyPair.derive(pk);
	const wallet = new Nimiq.Wallet(keyPair);
	const address = wallet.address.toUserFriendlyAddress();


	// Display the address on the page
	document.getElementById('address').innerHTML = address;

	// Get the current balance of the wallet
	Nimiq.Consensus.lightConsensus.accounts.get(address).then((account) => {
	  // Display the balance on the page
	  document.getElementById('balance').innerHTML = account.balance / 1000000;
	});  
});

// Send a transaction when the form is submitted
document.querySelector('form#send').addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the recipient address and amount from the form
  const recipient = document.getElementById('recipient').value;
  const amount = document.getElementById('amount').value;

  // Create a new transaction
  const transaction = new NimiqClient.Transaction();
  transaction.value = amount * 1000000; // Convert from NIM to satoshi
  transaction.recipient = NimiqClient.Address.fromString(recipient);
  transaction.fee = 1000; // Set the fee to 1 NIM
  transaction.validate();

  // Sign the transaction using the private key
  transaction.sign(keyPair);

  // Send the transaction to the Nimiq network
  NimiqClient.Consensus.lightConsensus.transactions.relay(transaction).then(() => {
    console.log(`Transaction sent: ${transaction.hash().toHex()}`);
  }).catch((error) => {
    console.error(error);
  });
});