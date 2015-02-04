// Below is a series of functions, each function has a
// description before it that explains what each of them
// should do. Complete the function so that it satisfies
// it's description.



// 1.
// Should always return the value 5

function giveMeFive() {
    return 5;
};

giveMeFive(); // 5

//---------

// 2.
// This function should accept 1 parameter
// and return the exact same thing. This type
// of function is called a no-op as in (no operation)

function noOp(param) {
    return param;
};

noOp("thing"); // "thing"

//---------

// 3.
// This function should accept 1 parameter; a number.
// It should return the number doubled. Doubled meaning
// it should return a number twice the size as the number
// that is passed in.

function double(num) {
    return num * 2;
};

double(5); // 10

//---------

// 4.
// This function should accept 1 parameter; a number.
// It should return the number squared. Squared meaning
// it should return the number multiplied by itself.

function square(num) {

    return num * num;

};

square(8); // 64

//---------

// 5.
// This function should accept 1 parameter; an array
// of numbers. It should calculate the sum (the total
// of all the numbers in the array added together)
// and return it.



function sum(numbers) {
    var summed = 0;

    for (i = 0; i < numbers.length; i++) {
        summed += numbers[i];
    }
    return summed;
}

// var arr = [1, 2, 3];
sum(arr); // 6

//---------

// 6.
// This function should accept 1 parameter; a single
// letter string (like "g".) It should return the index
// of that letter in the alphabet. For example "a" would
// be 1 and "z" would be 26. This should work for both
// lowercase and capital letters.

// HINT: use an array and a for loop



// Updated version on 2/4/15
function letterIndex(letter) {
    letter = letter.toLowerCase(); 
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    for(i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === letter) {
            return i;
        }
    }
}



// --------old version on 2/3/15 ----------------


function letterIndex(letter) {
    var letter;
    letter = letter.toLowerCase(); 
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split("");

    for(i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === letter) {
            return i;
        }
    }
}

letterIndex("b"); // 1


//---------

// 7.
// This function should accept 1 parameter; a number.
// It should return the letter that corresponds with
// that number. For example, 1 would be "a" and 26
// would be "z". This is the inverse of the previous
// function.

// Note: this needs to work for numbers larger than 26.
// For example 27 should loop back around to "a".

// HINT: use an array and the modulo (%) operator




// Improved one 2/4/15
function reverseLetterIndex(num) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    return alphabet[(num % alphabet.length)];

}


// --------old version on 2/3/15 ----------------



function reverseLetterIndex(num) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split("");

        return alphabet[(num % 26)];

}

 reverseLetterIndex(26); // "a"

//---------

// 8.
// This function should accept 1 parameter; a string.
// It should shift every letter in the string by 13
// places. This is a form of Caesar cipher known as
// ROT-13. If you are unsure of exactly what you are
// supposed to do read the wikipedia article that explains
// it quite well: http://en.wikipedia.org/wiki/ROT13

// HINT: use the previous 2 functions


// Improved version 2/4/15
function processWord(word) {
    var cipheredWord = []; // must be initialized as an array or it won't work
    var letters = word.split("");

    for(var i = 0; i < letters.length; i++) {
        cipheredWord.push(reverseLetterIndex(letterIndex(letters[i]) + 13));
    }
    cipheredWord = cipheredWord.join("");


    return cipheredWord;
};


function rot13(sentence) {
    var cipheredSentence = [];
    var words = sentence.split(" ");

    for(var i = 0; i < words.length; i++) {
        cipheredSentence.push(processWord(words[i]));
    }
    cipheredSentence = cipheredSentence.join(" ");

    return cipheredSentence;
}






// --------old version on 2/3/15 ----------------



// does rot13 on an individual word
function rotWord(word) {
    var characters = word.split("");
    var newWord = [];
    for (var i = 0; i < characters.length; i++) {

        //console.log(letterIndex(characters[i])); // WORKSS!!!!!!!!
        //return letterIndex(characters[i]); why does this not work?
        //console.log(letterIndex(characters[i]) + 13); // adds 13
        //console.log(reverseLetterIndex(letterIndex(characters[i]) + 13)); // works
        newWord.push(reverseLetterIndex(letterIndex(characters[i]) + 13));
    }
    newWord = newWord.join("");
    return newWord;
}

// puts the words back into a phrase
function rot13(string) {
    var words = string.split(" ");
    var newPhrase = [];
    for (var i = 0; i < words.length; i++) {
        newPhrase.push(rotWord(words[i]));
    }
    newPhrase = newPhrase.join(" ");
    return newPhrase;

}








// Original function that didn't take into account spaces
function rot13(string) {
    var characters = string.split("");
    var phrase = [];
    for (var i = 0; i < characters.length; i++) {

        //console.log(letterIndex(characters[i])); // WORKSS!!!!!!!!
        //return letterIndex(characters[i]); why does this not work?
        //console.log(letterIndex(characters[i]) + 13); // adds 13
        //console.log(reverseLetterIndex(letterIndex(characters[i]) + 13)); // works
        phrase.push(reverseLetterIndex(letterIndex(characters[i]) + 13));
    }
    phrase = phrase.join("");
    return phrase;
}
















