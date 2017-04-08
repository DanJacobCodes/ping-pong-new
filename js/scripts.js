//Business Logic//
var pingPongList = [];

function pingPong(numbers) {
  if (numbers % 15 === 0) {
    return "Ping Pong";
  } else if (numbers % 5 === 0) {
    return "Pong";

  } else if (numbers % 3 === 0){
    return "Ping";
  }
  else {
  return numbers;
  }
}

function returnedNumbers(numbers) {
   if (isNaN(numbers) || (numbers < 0)) {
     alert("Oops!Please enter a  valid number")
   }
   else {
     for(var i = 1; i <=numbers; i++) {
       pingPongList.push(pingPong(i));
     }
   }
}
 //User Interface Logic//
 $(document).ready(function() {
   $("form#pingPongGame").submit(function(event) {
      event.preventDefault();

      var userInput = parseInt($("#input").val());
      pingPongList = [];

      returnedNumbers(userInput);

   $("#output").empty();
      pingPongList.forEach(function(numbers) {
        $("ul#output").append("<li>" + numbers + "</li>");
      });
   });
 });
