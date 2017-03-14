'use strict';

const cryptUtils = require('./utils/crypto_support');
const storageUtils = require('./utils/storage_support');
const handlers = require('./utils/handlers');

let lr = handlers.logResult;


cryptUtils.genSalt(lr);



