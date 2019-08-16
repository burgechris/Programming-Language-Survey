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

    if (career === "dev" && interest === "ai" || interest === "applications") {
        $("#python").show();
      }
      else if (career === "software" || career === "dev" && interest === "simulation") {
        $("#ruby").show();
      }
      else if (career === "web" && interest === "applications" || interest === "ai") {
        $("#c").show();
      }
      else if (career === "hand" || company === "pendant" || interest === "sitcom" || challenge === "none" || animal === "sloth") {
        $("#george").show();
      }
      else if (animal === "none" || company === "none" || important === "none" || challenge === "none" || animal === "none") {
        alert("Oops, it looks like you forgot something!!")
      }
  });

});
