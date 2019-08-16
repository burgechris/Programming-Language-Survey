$(document).ready(function(){
  $(".survey").submit(function(event){
    $(".result").hide();
    event.preventDefault();
    var career = $("select#career").val();
    var company = $("select#company").val();
    var important = $("select#important").val();
    var challenge = $("select#challenge").val();
    var color = $("select#color").val();

    if (career === "dev" && company === "google" && important === "ai" && challenge === "somewhat" && color === "blue") {
      $("#python").show();
    }
    else if (career === "software" && company === "ig" && important === "simulation" && challenge === "somewhat" && color === "green") {
      $("#ruby").show();
    }
    else if (career === "software" && company === "microsoft" || important === "applications" && challenge === "somewhat" && color === "red") {
      $("#ruby").show();
    }
    else if (career === "hand" || career === "import" || company === "pendant" || important === "sitcom" || challenge === "none" || challenge === "yes" && color === "blue") {
      $("#george").show();
    }

  });

});
