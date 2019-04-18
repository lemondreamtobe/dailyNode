const fs = require('fs');
const path = require('path');
const { assign } = require('lodash');

const files = fs.readdirSync(__dirname);

const handler = {};

files.map(function (item) {
  const module = require(path.join(__dirname, item));
  assign(handler, module);
})

module.exports = handler;