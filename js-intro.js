// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

//create a function called boilingPoint that takes in a number
const boilingPoint = (number) => {
    //check to see if the input is a number
    if (typeof number === "number") {
        //check to see if below boiling point and return value is below boing point
        if (number < 212) {
            return `${number} is below boiling point`
            //check to see if at boing point and return value is at boiling point
        } else if (number === 212) {
            return `${number} is at boiling point`
            //check to see if above boiling point and return value is above boiling point
        } else if (number > 212) {
            return `${number} is above boiling point`
        }
        //if something other than a number was input, return 'invalid input'
    } else {
        return "Invalid input"
    }
}

console.log(boilingPoint(temp1));
console.log(boilingPoint(temp2));
console.log(boilingPoint(temp3));
console.log(boilingPoint("7"));



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

//create a function called mult 5 that takes in an array
const mult5 = (arr) => {
// define a new array
    let newArr = []
//write a for loop that takes each number in the array, multiplies it by 5 and pushes to new arr
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 5);
    }
    return newArr

}
console.log(mult5(myNumbers1));




// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

const multWithMap = (array) => {
    let mapArr = array.map(value => value*5)
        return mapArr
}
console.log(multWithMap(myNumbers2))




// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"
//create a function called noVowel that takes in an string
//string to array
//usinf filter write a funtion that takes out all the vowels
//array to string

const noVowel = (string) => {
    let newArr = string.split("")
    let minusVowel = newArr.filter(value => value.toLowerCase() !== "a" && value.toLowerCase() !== "e" && value.toLowerCase() !== "i" && value.toLowerCase() !== "o" && value.toLowerCase() !== "u")
    let newString = minusVowel.join("")
  return newString
  }


console.log(noVowel(stringWithVowels1))
console.log(noVowel(stringWithVowels2))

// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

const noVowel2 = (string) => {
    if (typeof string === "string"){
        let newArr = string.split("")
        let minusVowel = newArr.filter(value => value.toLowerCase() !== "a" && value.toLowerCase() !== "e" && value.toLowerCase() !== "i" && value.toLowerCase() !== "o" && value.toLowerCase() !== "u")
        let newString = minusVowel.join("")
        return newString 
    } else {
         return "Invalid Input"
    }
     
  }
console.log(noVowel2(notAString1))
console.log(noVowel2(notAString2))



// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

const onlyCats = toonimals.filter(value => value.animal === "cat")
console.log(onlyCats)


// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

const noCats = () => {
    let newArr = toonimals.filter(value => value.animal !== "cat")
    let justNames = newArr.map(value => toonimals.name)
        return newArr
}
        
console.log(noCats(toonimals))