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
    var none = $("input#none").val();

    $(".name").text(nameInput);

    if (career === "dev") {
        $("#python").show();
      }
      else if (career === "web") {
        $("#ruby").show();
      }
      else if (career === "software") {
        $("#c").show();
      }
      else if (career === "hand" || company === "pendant") {
        $("#george").show();
      }
  });

    $("#reset").click(function(){
      $(".result").hide()
    })
});
