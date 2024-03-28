//class is a blueprint for creating objects, defines the structure and behavior of objects inside it
//this one holds score for each letter

//constructor - special method within a class, automatically called when a new object of the class is created
//used to initialize the object's properties, perform/setup tasks for the object to function properly

class scrabbleRules {
  constructor() {
    this.scores = { "A": 1, "B": 3, "C": 3, "D": 2, "E": 1, "F": 4, "G": 2, "H": 4, "I": 1, "J": 8, "K": 5, "L": 1, "M": 3, "N": 1, "O": 1, "P": 3, "Q": 10, "R": 1, "S": 1, "T": 1, "U": 1, "V": 4, "W": 4, "X": 8, "Y": 4, "Z": 10 };
}


calculateScore() {
  let score = 0;
  //call the property of the letter, for loop? 
  {
    score += //update score for the letter
  }
  return score;
}

findWin (p1Word, p2Word) {
  let p1Score = this.calculateScore(p1Word);
  let p2Score = this.calculateScore(p2Word);
  if (p1Score > p2Score) {
    
  } else if (p1Score > p2Score) {

  } else {

  }
}


//create a new instance of the scrabbleRules class to pass it to findWin method
const rules = new scrabbleRules();

//call findWin method on the scrabbleRules instance, passing players words
const winner = rules.findWin(p1Word, p2Word);

console.log(winner);
