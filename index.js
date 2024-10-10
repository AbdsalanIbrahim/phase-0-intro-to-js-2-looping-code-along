function writeCards(names, event) {
  let messages = [];
  
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    
    messages.push(message);
  }
  
  return messages;
}

const thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(thankYouMessages);


function countDown(number) {
  while (number >= 0) {
    console.log(number);
    
    number--;
  }
}

countDown(10);
