function regulate(d,topTwist){
  var arr = [];

  for(i=0;i<d;i++){
    if(topTwist*i<=360){
      arr.push(topTwist*i);
    }
    if(topTwist*i>360){
      var multiplier = Math.floor((topTwist*i/360) % 360);
      console.log('second: ' + topTwist*i);
      console.log('mtplr: ' + multiplier);
      arr.push((topTwist*i)-(360*multiplier))
      //topTwist = base;
    }
  }return arr
}

var topTwist = 20;
var d = 50;

console.log(regulate(d,topTwist));
