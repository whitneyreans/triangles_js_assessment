var triangle = function(side1, side2, side3) {

  if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
    return "not a triangle";
  } else if (side1 === side2 && side2 === side3) {
    return "equilateral";
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    return "isosceles";
  } else {
    return "scalene";
  }
}


$(document).ready(function() {
  $("form#triangles").submit(function(event) {
    var side1 = $("input#side1").val();
    var side2 = $("input#side2").val();
    var side3 = $("input#side3").val();
    var result = triangle(side1, side2, side3);

    if (result === "not a triangle") {
      $(".sentence").text("This is not a triangle!");
    } else if (result === "equilateral") {
      $(".sentence").text("This is an equilateral triangle!");
    } else if (result === "isosceles") {
      $(".sentence").text("This is an isosceles triangle!");
    } else if (result === "scalene") {
      $(".sentence").text("This is a scalene triangle!");
    }

    $("#results").show();
    event.preventDefault();
  });
});
