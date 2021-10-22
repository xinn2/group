alert("I want to play a game!")

function evenorodd(a){
    if(a % 2 == 0) {
        console.log("EVEN");
    } else {
        console.log("ODD");
    }
}

let LuckyNumbers = [8, 36, 2003];
let FavouriteLetters = ['M', 'B', 'S']

let My = new Object();
My.LuckyNumbers = LuckyNumbers[2];
My.FavouriteLetters = FavouriteLetters[0];
console.log("My lucky number is", My.LuckyNumbers);

function power(a, b) {
    return a**b; 
 } 

 var modulo = function(a, b) {
    return a%b; 
 } 
  