/**
 * Module dependencies
 */

var assert = require('assert');
var http = require('http');

/**
 * Create a basic server.
 *
 * @param {Any} body
 * @param {Object} settings
 */

module.exports = function(body) {
  body = body || null;

  if (body) body = JSON.stringify(body);
  var contentType = 'text/plain';
  if ('object' == typeof body, contentType = 'application/json');

  var settings = {
    'Content-Type': contentType
  }

  return http.createServer(function(req, res) {
    res.writeHead(200, settings);
    if (body) res.write(body);
    res.end();
  });
};
