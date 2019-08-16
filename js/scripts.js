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

    if (career === "dev" && company === "google" || company === "hulu" && interest === "ai" || interest === "applications") {
        $("#python").show();
      }
      else if (career === "software" && company === "google" || company === "hulu" && interest === "ai" || interest === "simulation") {
        $("#ruby").show();
      }
      else if (career === "web" && company === "microsoft" || company === "google" && interest === "applications") {
        $("#c").show();
      }
      else if (career === "hand" && company === "pendant" && interest === "sitcom") {
        $("#george").show();
      }
      else if (animal === "none" || company === "none" || important === "none" || challenge === "none" || animal === "none") {
        alert("Oops, it looks like you forgot something!!")
      }
  });

});
