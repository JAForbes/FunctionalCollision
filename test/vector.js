var vector = require('../vector.js')
var R = require('ramda')
var assert = require('assert')
describe('A vector', function(){
  it('can be scaled by a scalar',function(){
    var scaled = vector.scale(10,[10,20]);

    assert(scaled+'' == '100,200')
  })
  it('can be added two another vector',function(){
    var added = vector.add([1,2],[2,4]);

    assert(added+'' == '3,6')
  })
  it('can be projected onto another vector',function(){
    assert(
      vector.project([2,1],[-3,4])+'' == '0.24,-0.32'
    )
  })

  it('can be projected onto a unit vector',function(){
    var a = [2,1]
    var b = [-3,4]

    var uB = vector.unit(b)

    var proj = vector.project(a,b)+''

    //unfortunate floating point formatting
    var projU = ''+R.map(function(n){
      return n.toFixed(2)
    },vector.projectUnit(a,uB))

    assert(proj == projU)
  })

  it('has a magnitude',function(){
    assert(vector.magnitude([3,4]) == 5)
  })

  it('is perpendicular to its normal',function(){
    var a = [3,-1]
    var r = vector.normalR(a)

    assert(
      vector.degrees(r) - vector.degrees(a) == 90
    )
  })
})

describe('A dot product', function(){
  it('of two vectors facing eachother yields a positive scalar',function(){
    assert(
      vector.dot([0,1],[0,2]) > 0
    )
  })
  it('of two vectors facing away from eachother yields a negative scalar',function(){
    assert(
      vector.dot([0,1],[0,-2]) < 0
    )
  })
})

describe('A Unit Vector', function(){
  it('has a magnitude of 1',function(){
    var v = [3,4]
    assert(
      vector.magnitude(vector.unit(v)) == 1
    )
  })
})
