//class is a blueprint for creating objects, defines the structure and behavior of objects inside it
//it holds the score for each letter

//constructor - special method within a class, automatically called when a new object of the class is created
//used to initialize the object's properties, perform/setup tasks for the object to function properly

//"this" refers to the current instance of an object within it's scope
//when used within a class method, allows access to the properties and methods of the current object

class scrabbleRules {
  constructor() {
    this.scores = { "A": 1, "B": 3, "C": 3, "D": 2, "E": 1, "F": 4, "G": 2, "H": 4, "I": 1, "J": 8, "K": 5, "L": 1, "M": 3, "N": 1, "O": 1, "P": 3, "Q": 10, "R": 1, "S": 1, "T": 1, "U": 1, "V": 4, "W": 4, "X": 8, "Y": 4, "Z": 10 }; //mapping each letter to its score
  }
//methods are defined within a class
//here I check if the current letter exists as a property in the scores object of the current instance (this)
//this.scores - scores object defined in the scrabbleRules class, has the scores of each letter
//hasOwnProperty() is a method of JS objects to check, if an object has a specific property (checks if the current letter is a property of the scores object)

  calculateScore(word) {
    let score = 0;
  
  ///iterate over each character in the "word" string
    for (let letter of word) {
      if (this.scores.hasOwnProperty(letter)) {
        score += this.scores[letter];
      }
    }
  //tests
  //console.log("Word is " + word);
  //console.log("Score is " + score);
  return score;
  }


  findWin (p1Word, p2Word) {
    let p1Score = this.calculateScore(p1Word);
    let p2Score = this.calculateScore(p2Word);

    if (p1Score > p2Score) {
      return ("Player 1 wins!");
    } else if (p1Score < p2Score) {
      return ("Player 2 wins!");
    } else {
      return ("Tie!");
    }
  }
}

///create a "game" object based on the blueprint provided by the class ScrabbleRules
//"game" is an object representing a specific instance of the Scrabble game with its own set of properties and methods inherited from the class
 
const game = new scrabbleRules();

const p1Word = prompt("Player 1, enter your word:");
const p2Word = prompt("Player 2, enter your word:");

//call findWin method on the scrabbleRules instance, passing players words
const winner = game.findWin(p1Word, p2Word);

console.log(winner);
