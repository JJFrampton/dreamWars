// Has been tested to work on jsbin.com - just copy and paste to test





/*where index numbers represent win loss draw
0 = win
1 = loss
2 = draw
*/

var cmpt = function() {
  
  
  var r = ["s", "p", "r"];
  var p = ["r", "s", "p"];
  var s = ["p", "r", "s"];
  

  var p1Choice = prompt('Player 1, select weapon r, p, or s','');

  
  
   //This area is problematic for scaling
  
  if (p1Choice === "r") {
    p1Choice = r;
  }
  if (p1Choice === "p") {
    p1Choice = p;
  }
  if (p1Choice === "s") {
    p1Choice = s;
  }

  //This area is problematic for scaling
  
  
  
  console.log("Player 1s index is <" + p1Choice +">. Where P1 beats the first, looses to the second and ties with the last... therefore P1s choice was the last.");
  
  var p2Choice = prompt('Player 2, select weapon r, p, or s','');
  console.log("Player 2 chose " + p2Choice);
  
    var winner;
  
    if (p2Choice === p1Choice[0]) {
      alert("Player 1 wins this round!");
      winner = "p1";
    }
    if (p2Choice === p1Choice[1]) {
      alert("Player 2 wins this round!");
      winner = "p2";
    }
    if (p2Choice === p1Choice[2]) {
      alert("Its a draw!");
    }
  
  
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

