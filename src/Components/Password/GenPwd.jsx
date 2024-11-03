import { useState } from "react";
import CopySvg from "../../assets/CopySvg";
import { genPwd } from "../../libs/function";
import ClickButton from "../ActionComponents/ClickButton";
import Checkbox from "../ActionComponents/Checkbox";
import ToggleSwitch from "../ActionComponents/ToggleSwitch";

function GenPwd() {
  const [length, setLength] = useState(16);
  const [lowerLetterBool, setLowerLetterBool] = useState(false);
  const [upperLetterBool, setUpperLetterBool] = useState(false);
  const [numberBool, setNumberBool] = useState(false);
  const [symbolsBool, setSymbolsBool] = useState(false);
  const [pwd, setPwd] = useState("");

  const checkboxParams = [
    {
      id: "lowerLetter",
      string: "Insérer des lettres minuscules",
      onChange: setLowerLetterHandler,
    },
    {
      id: "upperLetter",
      string: "Insérer des lettres majuscules",
      onChange: setUpperLetterHandler,
    },
    { id: "number", string: "Insérer des nombres", onChange: setNumberHandler },
    {
      id: "symbols",
      string: "Insérer des symboles",
      onchange: setSymbolsHandler,
    },
  ];

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
      <div className="flex justify-center w-2/3 bg-blue-5 shadow-lg rounded-3xl">
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
            <ToggleSwitch />
            {checkboxParams.map((param) => (
              <Checkbox
                key={param.id}
                string={param.string}
                id={param.id}
                onChange={param.onChange}
              />
            ))}
          </div>
          <div className="flex justify-center items-center py-2">
            <ClickButton value={"Générer"} setPwdHandler={setPwdHandler} />
          </div>
        </div>
      </div>
    </>
  );
}

export default GenPwd;
