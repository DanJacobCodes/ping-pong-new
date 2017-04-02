//Business Logic
var counter = [];

function pingPong(numbers) {
  if (numbers % 3 === 0) {
    return 'Ping!';
  } else if (numbers % 5 === 0) {
    return 'Pong!';
  } else if (numbers % 15 === 0){
    return 'Ping Pong!';
}   else {
  return numbers;
  }
}

function returnedNumbers(numbers) {
   if (isNan(numbers)) {
     alert("Oops!Please enter a number")
   } else {
     for (var i = 1; i < numbers.length; i++) {
       returnedNumbers.push(pingPong(i));
     }
   }

}
