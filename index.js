/**
 * Module dependencies
 */

var wayfarer = require('wayfarer');
var assert = require('assert');
var koa = require('koa');

/**
 * Create a basic server.
 *
 * @param {Any} body
 * @param {Object} settings
 */

module.exports = function(body) {
  body = body || null;

  var app = koa();
  app.use(function *(next) {
    this.body = body;
  });

  return app
};