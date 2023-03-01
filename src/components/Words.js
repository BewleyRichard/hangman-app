let wordDictionary = [
    "mercury",
    "venus",  
    "earth", 
    "mars", 
    "jupiter", 
    "saturn",  
    "uranus",  
    "neptune" 
]

/* This functions is used to select a random word from the above array of words.
It generates a random number using Math.random method, multiplies by the length of the array
using the length property. The resulting number is round down to the nearest integer using the Math.floor method.
This number is used as an index to access a word from the array. */
function randomWord() {
    return wordDictionary[Math.floor(Math.random() * wordDictionary.length)]
}

export { randomWord };