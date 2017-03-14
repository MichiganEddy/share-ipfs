'require strict';

const forge = require('node-forge');
const rsa = forge.pki.rsa;
const pki = forge.pki;

let keypair = rsa.generateKeyPair(1024, function(err, keypair){
    if(err) return console.log(`Error Generating Keypair.\nDetails: ${err}`);
    console.log(`PUBKEY PEM: ${ pki.publicKeyToPem(keypair.publicKey) }\nPUBKEY PEM: ${pki.privateKeyToPem(keypair.privateKey)}`);
});

