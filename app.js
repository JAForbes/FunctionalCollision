con = can.getContext('2d')

con.fillStyle = 'white'
con.fillRect(0,0,can.width,can.height)


con.translate(can.width/2,can.height/2)

extend = function(a,b){
  for(var key in b){
    var val = b[key]
    a[key] = val;
  }
  return a;
}

drawPoints = function(points,style,openPath){
  con.beginPath()
  con.moveTo.apply(con,points[0])
  R.map(function(point){
    con.lineTo.apply(con,point)
  },points.slice(1))
  extend(con,style)
  openPath || con.closePath()
  con.stroke()
  con.fill()

}

drawPoints([
  [-100,-100],
  [100,-100],
  [100,100],
  [-100,-100]
],{strokeStyle: 'red', lineWidth: 20})
