import {
  lettersLower,
  lettersUpper,
  numbers,
  symbols,
  lowerAndUpperAndNumberAndSymbolsRegEx,
  lowerAndUpperAndNumberRegEx,
  lowerAndUpperRegEx,
  lowerRegEx,
  numberRegEx,
  symbolsRegEx,
  upperRegEx,
  letterRegEx,
  isNumberOrSymbol,
} from "./var";

/* Pwd function */

// Check if string contains only lowercase using regex
function checkLower(string) {
  if (lowerRegEx.test(string)) {
    return true;
  }
  return false;
}

// Check if string contains only uppercase using regex
function checkUpper(string) {
  if (upperRegEx.test(string)) {
    return true;
  }
  return false;
}

// Check if string contains only numbers using regex
function checkNumber(string) {
  if (numberRegEx.test(string)) {
    return true;
  }
  return false;
}

// Check if string contains only special symbols using regex
function checkSymbols(string) {
  if (symbolsRegEx.test(string)) {
    return true;
  }
  return false;
}

// Calculate password complexity score based on character combinations
function checkChar(string) {
  let score = 0;
  let bool = false;

  // Highest score (3) for having all: lowercase, uppercase, numbers and symbols
  if (lowerAndUpperAndNumberAndSymbolsRegEx.test(string)) {
    score += 3;
    bool = true;
  }
  // Medium score (2) for having lowercase, uppercase and numbers
  else if (lowerAndUpperAndNumberRegEx.test(string) && !bool) {
    score += 2;
    bool = true;
  }
  // Lowest score (1) for having only lowercase and uppercase
  else if (lowerAndUpperRegEx.test(string) && !bool) {
    score += 1;
  }
  return score;
}

// Calculate password strength score based on length
function checkLength(string) {
  let score = 0;
  if (string.length > 6) {
    // Length >= 16: highest score (3)
    if (string.length >= 16) {
      score = 3;
    }
    // Length 11-15: medium score (2)
    else if (string.length >= 11 && string.length <= 15) {
      score = 2;
    }
    // Length 7-10: lowest score (1)
    else if (string.length >= 7 && string.length <= 10) {
      score = 1;
    }
  }
  return score;
}

// Main function to check password strength
export function checkPwd(string) {
  let valueStrength = 0;
  let boolNull = false;

  // Check if string contains only lowercase, uppercase, numbers or symbols
  if (checkNumber(string)) boolNull = true;
  if (checkLower(string)) boolNull = true;
  if (checkUpper(string)) boolNull = true;
  if (checkSymbols(string)) boolNull = true;

  // Calculate total strength score
  valueStrength += checkLength(string);
  valueStrength += checkChar(string);

  // If boolNull is true, return 0
  if (boolNull) valueStrength = 0;

  return valueStrength;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// function returnFirstLetter(string) {
//   if (string.test(letterRegEx)) {
//     return string[0];
//   }
// }

function getFirstLettersAndEveryNumberAndSpecials(string) {
  const words = string.split(" ");
  let result = "";
  // a revoir
  words.forEach((word) => {
    // il aime pas les c
    if (word.length > 0) {
      if (word.match(letterRegEx)) {
        result += word[0];
      } else if (word.match(numberRegEx)) {
        result += word;
      } else if (word.match(symbolsRegEx)) {
        result += word;
      } else if (word.match(lowerAndUpperAndNumberAndSymbolsRegEx)) {
        // Problem here : ne capte pas les caratères spéciaux dans un mot
        for (let i = 0; i < word.length; i++) {
          if (i === 0 && word[i].match(letterRegEx)) {
            result += word[i];
          } else if (word[i].match(isNumberOrSymbol)) {
            result += word[i];
          }
        }
      }
    }
  });

  return result;
}

// Generate password based on user preferences
export function genPwd(
  params = {
    lowerBool: false,
    upperBool: false,
    numbersBool: false,
    symbolsBool: false,
    length: 16,
    sentence: "",
  },
  isToggled = false
) {
  let charArr = [];
  let pwd = "";

  // If isToggled is false, generate password based on user preferences
  if (!isToggled) {
    if (params.lowerBool) charArr = [...charArr, ...lettersLower];
    if (params.upperBool) charArr = [...charArr, ...lettersUpper];
    if (params.numbersBool) charArr = [...charArr, ...numbers];
    if (params.symbolsBool) charArr = [...charArr, ...symbols];

    if (charArr.length !== 0) {
      charArr = shuffleArray(charArr);

      for (let index = 0; index <= params.length; index++) {
        const indexRandom = Math.floor(Math.random() * charArr.length);
        pwd += charArr[indexRandom];
      }
    }

    return pwd;
  }
  // If isToggled is true, generate a password with a sentence the user has to remember
  else {
    pwd = getFirstLettersAndEveryNumberAndSpecials(params.sentence);
    return pwd;
  }
}

/* Fin Pwd Fonction */
