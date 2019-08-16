$(document).ready(function(){
  $(".survey").submit(function(event){
    $(".result").hide();
    event.preventDefault();
    var career = $("select#career").val();
    var company = $("select#company").val();
    var important = $("select#important").val();
    var challenge = $("select#challenge").val();
    var animal = $("select#animal").val();

    if (career === "dev" || company === "google" || important === "ai" || challenge === "small" || animal === "moose") {
      $("#python").show();
    }
    else if (career === "web" || company === "hulu" || important === "simulation" || challenge === "moderate" || animal === "owl") {
      $("#ruby").show();
    }
    else if (career === "software" || company === "microsoft" || important === "applications" || challenge === "yes" || animal === "shark") {
      $("#c#").show();
    }
    else (career === "hand" || company === "pendant" || important === "sitcom" || challenge === "none" || animal === "sloth") {
      $("#george").show();
    }

  });

});
