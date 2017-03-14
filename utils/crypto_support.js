'require strict';

const forge = require('node-forge');
const rsa = forge.pki.rsa;
const pki = forge.pki;
const chalk = require('chalk');
const iterations = 250;

// Development Utils
const prompt = require('prompt');

function genSalt(cb) {
    forge.random.getBytes(128, function(err, bytes) {
        if(err) return console.log(`Error generating random bytes. ${err}`);
        console.log("Got Bytes Successfully.");
        cb(forge.util.bytesToHex(bytes));
    })
}

// let genSalt = function(){
//     return g;
// }

let generateKP = function generateKP(cb) {
    return rsa.generateKeyPair(2048, function(err, keypair){
         if(err) return console.log(`Error Generating Keypair.\nDetails: ${err}`);

            cb(pki.publicKeyToPem(keypair.publicKey));
            
     

        });
    
}

function getPW(){
    prompt.start();
    return new Promise((resolve, reject) => {
        prompt.get('password', function (err, results){
            if(!err && typof(results)=== 'string'){
                resolve(results);
            }
            reject('Must be a string');
        });
    });
}


// Terribly incomplete. Need to store the password and the crypted privkey in local storage until it can be persisted elsewhere.
function securePrivkey(key, password, cb){
   getPW().then(
       function(pass){
           cb(pki.encryptRsaPrivateKey(key, password));
       }
   )
}

// let keypair = rsa.generateKeyPair(1024, function(err, keypair){
//     if(err) return console.log(`Error Generating Keypair.\nDetails: ${err}`);
//     console.log(`PUBKEY PEM: ${ pki.publicKeyToPem(keypair.publicKey) }\nPUBKEY PEM: ${pki.privateKeyToPem(keypair.privateKey)}`);
// });

genSalt(function(val) {console.log(val);});

module.exports =  {
    
        genSalt: genSalt,
        forge: forge
    
}

