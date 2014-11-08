var test = require('tap').test
  , armory = require('../')

var IncomingMessage = require('http').IncomingMessage
  , Stream = require('stream').Stream

var options = { locale: 'en_US', _query: {}, region: 'us' }

test('_get', function(t) {
  armory._get('/realm/status', options, function(err, body, res) {
    t.type(body, 'object', 'body was parsed from JSON')
    t.type(res, IncomingMessage, 'full response passed as third parameter')

    t.equal(res.req.getHeader('Host'), 'us.api.battle.net', 'built battle.net url')
    t.similar(res.req.path, new RegExp('/wow/realm/status\\?locale=en_US&apikey='), 'built api path')

    t.end()
  })
})

test('should throw if no region is provided', function(t) {
  var fn = function() { armory._get('/realm/status', { _query: {} }) }
    , err = new Error('region must be provided')

  t.throws(fn, err, 'threw for undefined region')
  t.end()
})

test('should create Error object out of error reason', function(t) {
  armory._get('/0', options, function(err) {
    t.type(err, Error, 'Error passed as first param')
    t.end()
  })
})

test('should return Stream if no callback is passed', function(t) {
  var res = armory._get('/realm/status', options)

  t.type(res, Stream, 'returned a Stream')
  t.end()
})

// Auth is now mandatory and done via a query param - so tested in all other tests
// test('auth', function(t) {
//   armory.auth.privateKey = armory.auth.publicKey = 'test'
//
//   armory._get('/realm/status', options, function(err, body, res) {
//     var time = new Date(res.req.getHeader('Date')).getTime()
//     t.notOk(Number.isNaN(time), 'valid date header set')
//
//     t.similar(res.req.getHeader('Authorization'), /BNET test:/, 'header set')
//     t.end()
//   })
// })
