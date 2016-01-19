var triangleCheck = function (lengthA,lengthB,lengthC) {
  if (lengthA + lengthB <= lengthC || lengthB + lengthC <= lengthA || lengthA + lengthC <= lengthB) {
    return "notTriangle";
  } else if (lengthA === lengthB && lengthB === lengthC) {
    return "equilateralTriangle";
  } else if (lengthA === lengthB && lengthA !== lengthC || lengthA === lengthC && lengthA !==lengthB) {
    return "isoscelesTriangle";
  } else if (lengthA !== lengthB && lengthB !== lengthC) {
    return "scaleneTriangle";
  }
};
