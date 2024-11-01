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
} from "./var";

/* Pwd function */

function checkLower(string) {
  if (lowerRegEx.test(string)) {
    return true;
  }
  return false;
}
function checkUpper(string) {
  if (upperRegEx.test(string)) {
    return true;
  }
  return false;
}
function checkNumber(string) {
  if (numberRegEx.test(string)) {
    return true;
  }
  return false;
}
function checkSymbols(string) {
  if (symbolsRegEx.test(string)) {
    return true;
  }
  return false;
}

function checkChar(string) {
  let score = 0;
  let bool = false;
  if (lowerAndUpperAndNumberAndSymbolsRegEx.test(string)) {
    score += 3;
    bool = true;
  } else if (lowerAndUpperAndNumberRegEx.test(string) && !bool) {
    score += 2;
    bool = true;
  } else if (lowerAndUpperRegEx.test(string) && !bool) {
    score += 1;
  }
  return score;
}

function checkLength(string) {
  let score = 0;
  if (string.length > 6) {
    if (string.length >= 16) {
      score = 3;
    } else if (string.length >= 11 && string.length <= 15) {
      score = 2;
    } else if (string.length >= 7 && string.length <= 10) {
      score = 1;
    }
  }
  return score;
}

export function checkPwd(string) {
  let valueStrength = 0;
  let boolNull = false;
  if (checkNumber(string)) boolNull = true;
  if (checkLower(string)) boolNull = true;
  if (checkUpper(string)) boolNull = true;
  if (checkSymbols(string)) boolNull = true;

  valueStrength += checkLength(string);
  valueStrength += checkChar(string);

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
export function genPwd(lowerBool, upperBool, numbersBool, symbolsBool, length) {
  let charArr = [];
  let pwd = "";

  if (lowerBool) charArr = [...charArr, ...lettersLower];
  if (upperBool) charArr = [...charArr, ...lettersUpper];
  if (numbersBool) charArr = [...charArr, ...numbers];
  if (symbolsBool) charArr = [...charArr, ...symbols];
  if (charArr.length != 0) {
    charArr = shuffleArray(charArr);

    for (let index = 0; index <= length; index++) {
      const indexRandom = Math.floor(Math.random() * charArr.length);
      pwd += charArr[indexRandom];
    }
  }
  return pwd;
}

/* Fin Pwd Fonction */
