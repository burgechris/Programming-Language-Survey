$(document).ready(function(){
  $(".survey").submit(function(event){
    $(".result").hide();
    event.preventDefault();
    var career = $("select#career").val();
    var company = $("select#company").val();
    var important = $("select#important").val();
    var challenge = $("select#challenge").val();
    var animal = $("select#animal").val();
    var nameInput = $("input#name").val();

    $(".name").text(nameInput);

    if (career === "dev") {
      $("#python").show();
    }
    else if (career === "web" || company === "hulu") {
      $("#ruby").show();
    }
    else if (career === "software" || company === "microsoft") {
      $("#c").show();
    }
    else if (career === "hand" || company === "pendant" || important === "sitcom" || challenge === "none" || animal === "sloth") {
      $("#george").show();
    }

  });

});
