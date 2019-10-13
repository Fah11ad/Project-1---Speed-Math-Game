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
var $startDiv = document.getElementsByClassName("start")
var $start = document.querySelector("h1")
var $correct = document.querySelector(".correct");
var $wrong = document.querySelector(".wrong");
var seconds = 10;
var score = 0;
let count = 0;
document.querySelector(".timer").innerHTML = seconds
document.querySelector(".score").innerHTML = score

// START the Game
$start.addEventListener("click", function(){
   $equation.textContent = arr[count].q;
})    

// to choose randomly equation -->  Done
    
    // set a true and false answers for green button only --> Done 
    // array.forEach(element => {
        
    // });
    console.log($correct)
    $correct.addEventListener("click", function(){
        console.log(arr[count].a);
        
        if (arr[count].a == "true"){
            score = score + 1;
            count++
            $equation.textContent = arr[count].q;
            console.log(score);
            
            seconds++
            
      }else {
          return alert("Game over. Your score is " + score)
      }
    });
    $wrong.addEventListener("click", function(){
        if(arr[count].a == "false"){
            score = score + 1;
            count++
            $equation.textContent = arr[count].q;
            console.log(score);
            
            seconds++
            
      }else {
          return alert("Game over. Your score is " + score)
      }
    })
    

    // set true and and false answers for red button -->
   

  
 // set timer function (setinterval) --> not completed
// score box --> not completed
// game over --> not completed

 
  
     
  
  
