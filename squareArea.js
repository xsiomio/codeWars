function squareArea(A){
  squareArea = (A*4/(Math.PI*2))**2;
  return Number(squareArea.toFixed(2));
}
alert(squareArea(14.05));