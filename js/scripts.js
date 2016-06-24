function getMaxNumber() {
  var inputValue = $("#numberInput").val();
  var inputToInteger = parseInt(inputValue);
  return inputToInteger;
}

function getPingPong(maxNumber){
  var printSequence = [];
  for (var i=1; i <= maxNumber; i++){
    if (i%15 === 0 ){
      printSequence.push("pingpong");
    } else if (i % 3 === 0) {
      printSequence.push("Ping");
    } else if (i % 5 === 0) {
      printSequence.push("Pong");
    } else {
      printSequence.push(i);
    }
  }
  return printSequence;
}

$(function() {
  $("#theForm").submit(function(event) {
    event.preventDefault();
    var maxNumber = getMaxNumber();
    var sequence = getPingPong(maxNumber);
    for (i = 0; i < sequence.length; i++) {
      $('#result').append(sequence[i]);
      $('#result').append('<br>');
    }
  });
});
