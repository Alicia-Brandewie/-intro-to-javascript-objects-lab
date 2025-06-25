const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

/* 
Exercise 1:
*/
//console.dir(pokemon, { maxArrayLength: null })
console.log("Exercise 1 result", pokemon[58])

/*
Exercise 2:
*/
//console.log("Exercise 2 result", game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = ["Med"]

console.log(game.difficulty)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
//1.
let myStarters = pokemon[24]

console.log("Exercise 4.1 result", myStarters)
//2.
game.party = [myStarters]

console.log("Exercise 4.2 result", game)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
/* 5.1 Pokemon: 77, 131, 133, 150
  5.2 Push()
*/


game.party.push(pokemon[77], pokemon[131], pokemon [133], pokemon[150]
)

console.log("Exercise 5 result", game.party)
/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
for (let x = 1 ; x <=3; x++) {
  game.gyms.difficulty;
  [game.gyms.completed] = "true";
  console.log(game.gyms);
}


/*
if ([game.gym.difficulty <=3]) {
    completed = true;
    console.log(game.gym)
}
*/
