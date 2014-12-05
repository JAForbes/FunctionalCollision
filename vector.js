var isNode = typeof module !== 'undefined'

if(isNode){
  var R = require('ramda')
}

var vector = {
  scale: function(scalar,vector){
    return R.map(R.multiply(scalar),vector)
  },
  add: function(a,b){
    return [
      a[0]+b[0],
      a[1]+b[1]
    ]
  },
  dot: function(a,b){
    return a[0]*b[0] + a[1]*b[1]
  },
  magnitude: function(v){
    return Math.sqrt(
      v[0]*v[0] +
      v[1]*v[1]
    )
  },
  unit: function(v){
    return this.scale(1/this.magnitude(v),v)
  },
  project: function(a,b){
    var dot = this.dot;
    var magnitude = this.magnitude;
    var magnitudeSquared = Math.pow(magnitude(b),2)
    return this.scale(dot(a,b) / magnitudeSquared,b)
  },
  projectUnit: function(a,u){
    var dot = this.dot;
    return this.scale(dot(a,u),u)
  },
  normalR: function(v){
    return [
      -v[1], v[0]
    ]
  },
  normalL: function(v){
    return [
      v[1], -v[0]
    ]
  },
  theta: function(a){
    return Math.atan2(a[1],a[0])
  },
  degrees: function(a){
    return this.theta(a) * 180/Math.PI
  }
}

if(isNode){
  module.exports = vector
}
