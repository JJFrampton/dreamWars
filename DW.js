// Has been tested to work on jsbin.com - just copy and paste to test






var cmpt = function() {
  
  
  var A = ["B","C","D","E","F","G","A"];
  var B = ["C","D","E","F","G","A","B"];
  var C = ["D","E","F","G","A","B","C"];
  var D = ["E","F","G","A","B","C","D"];
  var E = ["F","G","A","B","C","D","E"];
  var F = ["G","A","B","C","D","E","F"];
  var G = ["A","B","C","D","E","F","G"];
  
  
  // First round


  var p1Choice = prompt('Player 1, select weapon A-G','');
  
  
  if (p1Choice === "A") {
    p1Choice = A;
  }
  if (p1Choice === "B") {
    p1Choice = B;
  }
  if (p1Choice === "C") {
    p1Choice = C;
  }
   if (p1Choice === "D") {
    p1Choice = D;
  }
   if (p1Choice === "E") {
    p1Choice = E;
  }
   if (p1Choice === "F") {
    p1Choice = F;
  }
   if (p1Choice === "G") {
    p1Choice = G;
  }

 
  console.log("Player 1s index is <" + p1Choice +">. Where P1 beats the first 3, looses to the next 3 and ties with the last... therefore P1s choice was the last.");
 
  
  
  var p2Choice = prompt('Player 2, select weapon A-G','');
  console.log("Player 2 chose " + p2Choice);
  
    var winner;
  
    if (p2Choice === p1Choice[0] | p1Choice[1] | p1Choice[2]) {
      alert("Player 1 wins this round!");
      winner = "p1";
    }
    if (p2Choice === p1Choice[3] | p1Choice[4] | p1Choice[5]) {
      alert("Player 2 wins this round!");
      winner = "p2";
    }
    if (p2Choice === p1Choice[6]) {
      alert("Its a draw!");
    }
  
  
  // Second round
  
  
  if (winner === "p1") {
    var runp2 = prompt("Run P2! n, e, s, or w?");
    var chasep1 = prompt("Chase! n, e, s, or w?");
    if (runp2 === chasep1) {
      alert("Player 2 looses");
    }
    else {
      alert("Player 2 lives to fight another day");
    }
  }
  
  
  if (winner === "p2") {
    var runp1 = prompt("Run P1@! n, e, s, or w?");
    var chasep2 = prompt("Chase! n, e, s, or w?");
    if (runp1 === chasep2) {
      alert("Player 1 looses");
    }
    else {
      alert("Player 1 lives to fight another day");
    }
  }

};

console.log(cmpt());

