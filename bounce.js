//FITS WITHIN D WITH BOUNCE(BOUNCE NEEDS TO BE EVEN)
var bounce = 1;
var d = 20;
var peak = 100;
var use = ((peak*4)/(d))*bounce;
// console.log(gap);
console.log(use);

function bounceArr(bounce,d){
  var arr = [];

  var length = ((d/2)/bounce);
  console.log(length)

  for(j=0;j<bounce;j++){
    var k=0;
    for(i=0;i<length;i++){
      arr.push(-peak+(k*use));
      k++
    }
    var k=0;
    for(i=0;i<length;i++){
      arr.push(peak-(use*k));
      k++
    }
  }
  return arr
}

  var bounce = 2;
  var multipier = 5;
  //D NEEDS TO BE ODD
  function backAndFourth(d,start,bounce,multipier){
    var arr = [];
    var peak = d/2;
    for(j=0;j<bounce;j++){
      var k=-Math.floor(peak);
      for(i=0;i<d;i++){
        arr.push(k*multipier);
        k++
      }
      var k=Math.floor(peak)-1
      for(i=d-1;i>1;i--){
        arr.push(k*multipier);
        k--
      }
    }
    arr.push(-Math.floor(Math.floor(peak)*multipier))
    return arr
  }

  console.log(backAndFourth(13,0,bounce,multipier))


