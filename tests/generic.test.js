var test = require('tap').test
  , armory = require('../')

var Stream = require('stream').Stream

test('achievement', function(t) {
  var options = { id: 1705, region: 'us' }

  t.test('should build correct url and response', function(t) {
    armory.achievement(options, function(err, body, res) {
      t.notOk(err, 'no error returned')
      t.similar(res.req.path, new RegExp('/wow/achievement/1705\\?apikey='), 'built api url')
      t.equal(res.statusCode, 200, 'returned 200')
      t.type(body, 'object', 'returned an object')
      t.end()
    })
  })

  t.test('should return a Stream if no callback is passed', function(t) {
    var res = armory.achievement(options)

    t.type(res, Stream)
    t.end()
  })
})

test('auction', function(t) {
  var options = { id: 'shadowmoon', region: 'us' }

  t.test('should build correct url and response', function(t) {
    armory.auction(options, function(err, body, res) {
      t.notOk(err, 'no error returned')
      t.similar(res.req.path, new RegExp('/wow/auction/data/shadowmoon\\?apikey='), 'built api url')
      t.equal(res.statusCode, 200, 'returned 200')
      t.type(body, Array, 'returned an array')
      t.end()
    })
  })

  t.test('should return a Stream if no callback is passed', function(t) {
    var res = armory.auction(options)

    t.type(res, Stream)
    t.end()
  })
})

test('challenge', function(t) {
  var options = { id: 'shadowmoon', region: 'us' }

  t.test('should build correct url and response', function(t) {
    armory.challenge(options, function(err, body, res) {
      t.notOk(err, 'no error returned')
      t.similar(res.req.path, new RegExp('/wow/challenge/shadowmoon\\?apikey='), 'built api url')
      t.equal(res.statusCode, 200, 'returned 200')
      t.type(body, Array, 'returned an array')
      t.end()
    })
  })

  t.test('should return a Stream if no callback is passed', function(t) {
    var res = armory.challenge(options)

    t.type(res, Stream)
    t.end()
  })
})

test('challengeRegion', function(t) {
  var options = { region: 'us' }

  t.test('should build correct url and response', function(t) {
    armory.challengeRegion(options, function(err, body, res) {
      t.notOk(err, 'no error returned')
      t.similar(res.req.path, new RegExp('/wow/challenge/region\\?apikey='), 'built api url')
      t.equal(res.statusCode, 200, 'returned 200')
      t.type(body, Array, 'returned an array')
      t.end()
    })
  })

  t.test('should return a Stream if no callback is passed', function(t) {
    var res = armory.challengeRegion(options)

    t.type(res, Stream)
    t.end()
  })
})

test('item', function(t) {
  var options = { id: 28041, region: 'us' }

  t.test('should build correct url and response', function(t) {
    armory.item(options, function(err, body, res) {
      t.notOk(err, 'no error returned')
      t.similar(res.req.path, new RegExp('/wow/item/28041\\?apikey='), 'built api url')
      t.equal(res.statusCode, 200, 'returned 200')
      t.type(body, 'object', 'returned an object')
      t.end()
    })
  })

  t.test('should return a Stream if no callback is passed', function(t) {
    var res = armory.item(options)

    t.type(res, Stream)
    t.end()
  })
})

test('itemSet', function(t) {
  var options = { id: 650, region: 'us' }

  t.test('should build correct url and response', function(t) {
    armory.itemSet(options, function(err, body, res) {
      t.notOk(err, 'no error returned')
      t.similar(res.req.path, new RegExp('/wow/item/set/650\\?apikey='), 'built api url')
      t.equal(res.statusCode, 200, 'returned 200')
      t.type(body, 'object', 'returned an object')
      t.end()
    })
  })

  t.test('should return a Stream if no callback is passed', function(t) {
    var res = armory.itemSet(options)

    t.type(res, Stream)
    t.end()
  })
})

test('quest', function(t) {
  var options = { id: 11549, region: 'us' }

  t.test('should build correct url and response', function(t) {
    armory.quest(options, function(err, body, res) {
      t.notOk(err, 'no error returned')
      t.similar(res.req.path, new RegExp('/wow/quest/11549\\?apikey='), 'built api url')
      t.equal(res.statusCode, 200, 'returned 200')
      t.type(body, 'object', 'returned an object')
      t.end()
    })
  })

  t.test('should return a Stream if no callback is passed', function(t) {
    var res = armory.quest(options)

    t.type(res, Stream)
    t.end()
  })
})

test('recipe', function(t) {
  var options = { id: 33288, region: 'us' }

  t.test('should build correct url and response', function(t) {
    armory.recipe(options, function(err, body, res) {
      t.notOk(err, 'no error returned')
      t.similar(res.req.path, new RegExp('/wow/recipe/33288\\?apikey='), 'built api url')
      t.equal(res.statusCode, 200, 'returned 200')
      t.type(body, 'object', 'returned an object')
      t.end()
    })
  })

  t.test('should return a Stream if no callback is passed', function(t) {
    var res = armory.recipe(options)

    t.type(res, Stream)
    t.end()
  })
})

test('spell', function(t) {
  var options = { id: 6197, region: 'us' }

  t.test('should build correct url and response', function(t) {
    armory.spell(options, function(err, body, res) {
      t.notOk(err, 'no error returned')
      t.similar(res.req.path, new RegExp('/wow/spell/6197\\?apikey='), 'built api url')
      t.equal(res.statusCode, 200, 'returned 200')
      t.type(body, 'object', 'returned an object')
      t.end()
    })
  })

  t.test('should return a Stream if no callback is passed', function(t) {
    var res = armory.spell(options)

    t.type(res, Stream)
    t.end()
  })
})
