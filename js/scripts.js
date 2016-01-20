var triangleCheck = function (lengthA,lengthB,lengthC) {
  if (lengthA + lengthB <= lengthC || lengthB + lengthC <= lengthA || lengthA + lengthC <= lengthB) {
    return "notTriangle";
  } else if (lengthA === lengthB && lengthB === lengthC) {
    return "equilateralTriangle";
  } else if (lengthA === lengthB && lengthA !== lengthC || lengthA === lengthC && lengthA !==lengthB || lengthB === lengthC && lengthB !== lengthA) {
    return "isoscelesTriangle";
  } else if (lengthA !== lengthB && lengthB !== lengthC) {
    return "scaleneTriangle";
  }
};

$(document).ready(function() {
  $("form#dimensions").submit(function(event) {
    var lengthA = parseInt($("input#lengthA").val());
    var lengthB = parseInt($("input#lengthB").val());
    var lengthC = parseInt($("input#lengthC").val());
    var result = triangleCheck (lengthA,lengthB,lengthC)

    if (result === "notTriangle") {
      $(".triangleType").text("not a real triangle, idiot");
    } else if (result === "equilateralTriangle") {
      $(".triangleType").text("an equilateral triangle");
    } else if (result === "isoscelesTriangle") {
      $(".triangleType").text("an isosceles triangle");
    } else if (result === "scaleneTriangle") {
      $(".triangleType").text("an scalene triangle");
    }

    $("#result").show();

    event.preventDefault();
  });
});
