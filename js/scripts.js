//Business Logic
var counter = [];

function pingPong(numbers) {
  if (numbers % 3 === 0) {
    return 'Ping!'
  } else if (numbers % 5 === 0) {
    return 'Pong!'
  } else if (numbers % 15 === 0)
    return 'Ping Pong!'  
}
