export const isNumberOrSymbol = /^[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]+$/;
export const lowerRegEx = /^[a-z]+$/;
export const upperRegEx = /^[A-Z]+$/;
export const letterRegEx = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
export const numberRegEx = /^\d+$/;
export const symbolsRegEx = /^[^A-Za-z0-9]+$/;
export const lowerAndUpperRegEx = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
export const lowerAndUpperAndSymobolsRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]).+$/;
export const lowerAndUpperAndNumberRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
export const lowerAndUpperAndNumberAndSymbolsRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;
export const filtres = [
  "Toutes les entrées",
  "Sites Web",
  "Applications",
  "Autre",
];
export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const lettersUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
export const lettersLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
export const symbols = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
