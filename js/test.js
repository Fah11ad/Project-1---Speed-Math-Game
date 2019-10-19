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
    {q: "8 + 9 = 16", a: "false"}, 
    {q: "6 + 9 = 15", a: "true"}, 
    {q: "3 + 5 = 7", a: "false"}, 
    {q: "9 + 9 = 18", a: "true"}, 

];
let newArr = [];
while(arr.length > newArr.length){
    let randomIndex = Math.floor(Math.random() * arr.length); // for random equations
    
    if(newArr.indexOf(arr[randomIndex]) == -1){ // to avoid repeating equations
        newArr.push(arr[randomIndex]);
    }
}


console.log(newArr);

