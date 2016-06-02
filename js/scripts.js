$(document).ready(function() {
  alert('Your animal choices are: jaguar, elephant, and penguin. Please select your favorite.');
  var jaguar = window.confirm("Is it a jaguar?");
  if ( jaguar ) {
    $(".jaguar").show();
  } else {
    var elephant = window.confirm("Is it an elephant?");
    if (elephant) {
      $(".elephant").show();
    } else {
      var penguin = window.confirm("Is it a penguin?");
      if ( penguin ) {
        $(".penguin").show();
      } else {
        alert("Why do you hate the animals?");
        }
      }
    }
  });
