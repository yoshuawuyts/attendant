/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var request = require('supertest');
var should = require('should');
var attendant = require('./index');

/**
 * Test
 */

describe('attendant()', function() {
  it('should handle get requests', function(done) {
    var server = attendant({foo: 'bar'});

    request(server.listen())
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('should handle post requests', function(done) {
    var server = attendant();

    request(server.listen())
      .post('/')
      .send({cat: 'dog'})
      .expect(200, done);
  });

  it('should handle patch requests', function(done) {
    var server = attendant();

    request(server.listen())
      .patch('/')
      .send({cat: 'dog'})
      .expect(200, done);
  });

  it('should handle put requests', function(done) {
    var server = attendant();

    request(server.listen())
      .put('/')
      .send({cat: 'dog'})
      .expect(200, done);
  });
});
