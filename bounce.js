var bounce = 2;
//D NEEDS TO BE ODD
function backAndFourth(d,start,bounce){
  var arr = [];
  var peak = d/2;
  for(j=0;j<bounce;j++){
    var k=-Math.floor(peak);
    for(i=0;i<d;i++){
      arr.push(k);
      k++
    }
    var k=Math.floor(peak)-1
    for(i=d-1;i>1;i--){
      arr.push(k);
      k--
    }
  }
  arr.push(-Math.floor(peak))
  return arr
}

console.log(backAndFourth(13,0,bounce))
