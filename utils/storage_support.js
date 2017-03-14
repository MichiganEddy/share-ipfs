'use strict';

let store = require('store2');

function newUserSetup(username, password_hash, privkey_root, pubkey_root) {
    store("username", username);
    store("pass", password_hash);
    store("root_privkey", privkey_root);
    store("root_pubkey", pubkey_root);
}




module.exports = function() {
    return {
        userSetup: newUserSetup,
        store: store
    }
}