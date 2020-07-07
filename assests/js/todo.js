$("ul").on("click", "li", function () {
  //   //LOGIC To check if the text is striked
  //   //If text is black turn it into gray & striked
  //   if ($(this).css("color") === "rgb(0, 0, 0)") {
  //     $(this).css({
  //       color: "gray",
  //       textDecoration: "line-through",
  //     });
  //   }
  //   ////If text is grey & striked then it into black & no strike(none)
  //   else
  //     $(this).css({
  //       color: "black",
  //       textDecoration: "none",
  //     });
  $(this).toggleClass("completed");
});

//click on X yo delete
$("ul").on("click", "span", function (event) {
  //Taping (in span) to remove whole clicked li
  //$(this).parent()=>"li"-parent of span
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  //Following function STOPS BUBBLING ==> When U click span , u also click its parents(like-li,ul,body etc) .Therefore parents events(like-click etc) or functions get fires....So series of unwanted events takes place.this is called bubbling....LEC-@@^-DELETE
  event.stopPropagation();
});

//to add TODO
$("input[type=text]").on("keyup", function (event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append(
      "<li><span><i class=' fas fa-trash-alt '></i></span>" + todoText + "</li>"
    );
  }
});

$("h1").on("click", "i", function () {
  $("input[type=text]").fadeToggle();
});
