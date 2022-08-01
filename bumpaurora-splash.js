// window.onload = function() {
//     window.setTimeout(fadeoutstart, 2000); //8 seconds
//     window.setTimeout(fadeinletsgo, 3000);
//     window.setTimeout(fadeoutletsgo, 1000);
//   }

  
//   function fadeoutstart() {
//     document.getElementById('startdate').style.opacity = '0';
//   }

//   function fadeinletsgo() {
//     document.getElementById('letsgo').style.opacity = '1';
// }

//   function fadeoutletsgo() {
//       document.getElementById('letsgo').style.opacity = '0';
//   }


function change_text(){

    let current_text = $('#alternating').text();
    let other_text = "行こう。";
    let orig_text = "2019.7.2 Start";
  
    if (current_text == "2019.7.2 Start"){
        $("#alternating").fadeOut("slow", function() {
            $('#alternating').text(other_text);
        });
        $("#alternating").delay(750).fadeIn("slow");
    } else {
        $("#alternating").fadeOut("slow", function() {
            $('#alternating').text(orig_text);
        });
        $("#alternating").delay(750).fadeIn("slow");
    }
    
}
setInterval(change_text, 5000);