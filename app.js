var vector = {
  scale: function(scalar,vector){
    return R.map(R.multiply(scalar),vector)
  },
  add: function(increment,vector){
    return R.map(R.multiply(scalar),vector)
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
  normalize: function(v){
    return this.scale(this.magnitude(v),v)
  },
  project: function(a,b){
    var magnitudeSquared = Math.pow(magnitude(b),2)
    return R.scale(dot(a,b) / magnitudeSquared,b)
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
  }
}
