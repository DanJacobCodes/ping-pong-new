//Business Logic//
var pingPongList = [];

function pingPong(numbers) {
  if (numbers % 15 === 0) {
    return 'Ping Pong!';
  } else if (numbers % 5 === 0) {
    return 'Pong!';

  } else if (numbers % 3 === 0){
    return 'Ping !';
  }
  else {
  return numbers;
  }
}

function returnedNumbers(numbers) {
   if (isNan(numbers)) {
     alert("Oops!Please enter a number")
   } else {
     for (var i = 1; i <=numbers; i++) {
       returnedNumbers.push(pingPong(i));
     }
   }

}
 //User Interface Logic//
 $(document).ready(function() {
   $("form#pingPongGame").submit(function(event){
      event.preventDefault();

      var userInput = parseInt($("form#input").val());
      pingPongList = [];

      returnedNumbers(userInput);

   })

 })
