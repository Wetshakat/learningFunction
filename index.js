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

let Group = [
  {
    name : "john",
    Age : 25,
    nationality : "Nigerian",
    
  },

{
    name : "Paul",
    Age : 30,
    nationality : "Nigerian",
    
},
{
  name : "john",
  Age : 35,
  nationality : "Nigerian",
}
]

// let totalAge= Group.reduce((sum,person)=>sum + person.Age ,0,);
// console.log(totalAge)

let totalAge = Group.reduce ((sum,person)=> sum +person.Age,0,);
console.log(totalAge)

let allNames = Group.reduce((sum,person)=> sum+person.name,"");
console.log(allNames)

function concatName(group) {
  if(group.length < 2){
    return "You are Funny lol"
  }
  
  let personOneName = group[1].name;
  let personTwoAge = group[2].Age

  return personOneName + personTwoAge;
}
let result = concatName(Group);
console.log(result);