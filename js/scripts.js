$(document).ready(function(){
  var name = prompt("Please enter your name.")
  $(".survey").submit(function(event){
    $(".result").hide();

    event.preventDefault();

    var career = $("select#career").val();
    var company = $("select#company").val();
    var interest = $("select#interest").val();
    var challenge = $("select#challenge").val();
    var animal = $("select#animal").val();

    $(".name").text(name);

    if (career === "none" || company === "none" || interest === "none" || challenge === "none" || animal === "none") {
      alert("Oops, it looks like you forgot something!!");
    }
      else if (career === "dev") {
        $("#python").show();
      }
      else if (career === "web") {
        $("#ruby").show();
      }
      else if (career === "software") {
        $("#c").show();
      }
      else if (career === "hand") {
        $("#george").show();
      }
  });

});
