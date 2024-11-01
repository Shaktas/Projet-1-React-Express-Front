import { useState } from "react";
import CopySvg from "../../assets/CopySvg";
import { genPwd } from "../../libs/function";

function GenPwd() {
  const [length, setLength] = useState(16);
  const [lowerLetterBool, setLowerLetterBool] = useState(false);
  const [upperLetterBool, setUpperLetterBool] = useState(false);
  const [numberBool, setNumberBool] = useState(false);
  const [symbolsBool, setSymbolsBool] = useState(false);
  const [pwd, setPwd] = useState("");

  function setLengthHandler(e) {
    setLength(e.target.value);
  }
  function setLowerLetterHandler(e) {
    setLowerLetterBool(e.target.checked);
  }
  function setUpperLetterHandler(e) {
    setUpperLetterBool(e.target.checked);
  }
  function setNumberHandler(e) {
    setNumberBool(e.target.checked);
  }
  function setSymbolsHandler(e) {
    setSymbolsBool(e.target.checked);
  }
  function setPwdHandler() {
    setPwd(
      genPwd(lowerLetterBool, upperLetterBool, numberBool, symbolsBool, length)
    );
  }

  function PasteHandler() {
    navigator.clipboard.writeText(pwd);
  }

  return (
    <>
      <div className="my-10">
        <h1 className="text-blue-12 text-2xl">Générateur de mots de passe</h1>
      </div>
      <div className="flex justify-center w-2/3 h-5/6 bg-blue-5 shadow-lg rounded-3xl">
        <div className="w-2/3">
          <p className="flex justify-between items-center mt-10 h-7 bg-blue-8 text-blue-12 w-full rounded-3xl indent-5">
            {pwd}
            {pwd.length != 0 ? (
              <button
                className="flex justify-center items-center"
                type="button"
                role="button"
                onClick={PasteHandler}
              >
                <span className="mr-2 text-blue-12">
                  <CopySvg height="15" width="15" />
                </span>
              </button>
            ) : (
              ""
            )}
          </p>
          <div className="flex flex-col justify-center mt-5">
            <div className="flex justify-between">
              <label htmlFor="length">Longueur du mot de passe</label>
              <span>{length}</span>
            </div>
            <input
              min="1"
              max="32"
              type="range"
              name="length"
              id="length"
              className="accent-blue-8"
              value={length}
              onChange={setLengthHandler}
            />
            <div>
              <input
                type="checkbox"
                name="number"
                id="number"
                onChange={setNumberHandler}
              />
              <label className="ml-1" htmlFor="number">
                Insérer des nombres
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="lowerLetter"
                id="lowerLetter"
                onChange={setLowerLetterHandler}
              />
              <label className="ml-1" htmlFor="lowerLetter">
                Insérer des lettres minuscules
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="upperLetter"
                id="upperLetter"
                onChange={setUpperLetterHandler}
              />
              <label className="ml-1" htmlFor="upperLetter">
                Insérer des lettres majuscules
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="symbols"
                id="symbols"
                onChange={setSymbolsHandler}
              />
              <label className="ml-1" htmlFor="symbols">
                Insérer des caractères spéciaux
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center py-2">
            <input
              type="button"
              role="button"
              onClick={setPwdHandler}
              value="Générer"
              className="bg-blue-10 border-none text-blue-5 py-1 px-4 text-center no-underline inline-block text-lg m-1 cursor-pointer rounded-lg hover:bg-blue-11"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GenPwd;
