var arr = [
    {q: "7 + 5 = 12", a:"true"},
    {q: "3 + 8 = 9", a: "false"},
    {q: "5 + 4 = 9", a: "true"},
    {q: "4 + 7 = 11", a: "true"},
    {q: "9 + 5 = 13", a: "false"},
    {q: "3 + 7 = 10", a: "true"},
    {q: "8 + 5 = 13", a: "true"},
    {q: "5 + 6 = 12", a: "false"},
    {q: "2 + 7 = 9", a: "true"},
    {q: "7 + 9 = 15", a: "false"},
    {q: "6 + 5 = 13", a: "false"},
    {q: "4 + 3 = 7", a: "true"},
    {q: "7 + 8 = 15", a: "true"},
    {q: "6 + 8 = 14", a: "true"},
    {q: "9 + 12 = 18", a: "false"},
    {q: "7 + 4 = 13", a: "false"}, 
];
var $equation = document.querySelector("h2");
var $start = document.querySelector("h1")
var $correct = document.querySelector(".correct");
var $wrong = document.querySelector(".wrong");
var score = 0;
// var $correct = addEventListener


// to choose randomly equation -->  Done
function shuffle(arr) {
    var newIndex;
    var oldIndex;
  
    for (var i = arr.length - 1; i > 0; i--) {
        newIndex = Math.floor(Math.random() * (i + 1));
        oldIndex = arr[i];
        arr[i] = arr[newIndex];
        arr[newIndex] = oldIndex;
    }
    $equation.textContent = arr[i].q;
     // set a true and false answers for green button only --> Done 
    $correct.addEventListener("click", function(){
        if($correct.value === arr[i].a){
            score ++;
            alert("You are Right!")
      }else {
          return alert("Game over. Your score is " + score)
      }
    })
  }
  shuffle(arr)

 
  
     
  
  
