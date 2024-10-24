import {
  lowerAndUpperAndNumberAndSymbolsRegEx,
  lowerAndUpperAndNumberRegEx,
  lowerAndUpperRegEx,
  lowerRegEx,
  numberRegEx,
  symbolsRegEx,
  upperRegEx,
} from "./var";

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
  if (checkNumber(string)) return valueStrength;
  if (checkLower(string)) return valueStrength;
  if (checkUpper(string)) return valueStrength;
  if (checkSymbols(string)) return valueStrength;

  valueStrength += checkLength(string);
  valueStrength += checkChar(string);

  console.log(valueStrength);

  return valueStrength;
}
