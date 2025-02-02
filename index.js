let scores = [2,3,6,7,8,19]

// const sumArray = (arr) => arr.reduce((sum, num)=> sum + num, 0);
let addArray = (arr) => arr.reduce((sum, num)=> sum - num, 0);
 addArray = (arr) => arr.reduce((sum, num)=> sum * num, 2);

console.log(addArray(scores)); 

function useArray(cry) {
   let sum = 0
    for(let num of cry ){
        sum+=num;}

        return sum;
    
}
console.log(useArray(scores));

console.log(scores.length);


let name = "Vic3"; 

function greet(name) {
name = "Racy"; 
  console.log("Hello, " + name); 
}

greet();
console.log("Hello ,"+ name); 
