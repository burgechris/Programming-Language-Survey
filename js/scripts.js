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

    if (career === "dev") {
        $("#python").show();
      }
      else if (career === "software") {
        $("#ruby").show();
      }
      else if (career === "web") {
        $("#c").show();
      }
      else if (career === "hand") {
        $("#george").show();
      }
      else if (animal === "none" || company === "none" || important === "none" || challenge === "none" || animal === "none") {
        alert("Oops, it looks like you forgot something!!")
      }
  });

});
