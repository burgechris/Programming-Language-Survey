$(document).ready(function(){
  $(".survey").submit(function(event){
    $(".result").hide();
    event.preventDefault();
    var career = $("select#career").val();
    var company = $("select#company").val();
    var important = $("select#important").val();
    var challenge = $("select#challenge").val();
    var color = $("select#color").val();

    // if (!career || !company || !important || !challenge || !color) {
    //   alert("Oops, it looks like you missed something!")
    // }

    if (career === "dev" && company === "google" && important === "ai" && challenge === "somewhat" && color === "blue") {
      $("#python").show();
    }
    else if (career === "software" && company === "ig" && important === "simulation" && challenge === "somewhat" && color === "green") {
      $("#ruby").show();
    }

  });

});
