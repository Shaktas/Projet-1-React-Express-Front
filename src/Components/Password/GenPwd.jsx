import { useState, useContext } from "react";
import { genPwd } from "../../libs/function";
import ClickButton from "../ActionComponents/ClickButton";
import Checkbox from "../ActionComponents/Checkbox";
import ToggleSwitch from "../ActionComponents/ToggleSwitch";
import CustomPwd from "./CustomPwd";
import CopyButton from "../ActionComponents/CopyButton";
import { TooltipContext } from "../../Context/TooltipContext";

function GenPwd() {
  const [length, setLength] = useState(16);
  const [lengthCustom, setLengthCustom] = useState("");
  const [lowerLetterBool, setLowerLetterBool] = useState(true);
  const [upperLetterBool, setUpperLetterBool] = useState(true);
  const [numberBool, setNumberBool] = useState(true);
  const [symbolsBool, setSymbolsBool] = useState(true);
  const [pwd, setPwd] = useState("");
  const [pwdCustom, setPwdCustom] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [sentenceCustom, setSentenceCustom] = useState("");
  const { pasteHandler } = useContext(TooltipContext);
  const checkboxParams = [
    {
      id: "lowerLetter",
      string: "Insérer des lettres minuscules",
      checked: lowerLetterBool,
      onChange: setLowerLetterHandler,
    },
    {
      id: "upperLetter",
      string: "Insérer des lettres majuscules",
      checked: upperLetterBool,
      onChange: setUpperLetterHandler,
    },
    {
      id: "number",
      string: "Insérer des nombres",
      checked: numberBool,
      onChange: setNumberHandler,
    },
    {
      id: "symbols",
      string: "Insérer des symboles",
      checked: symbolsBool,
      onChange: setSymbolsHandler,
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
  function setSentenceCustomHandler(e) {
    setSentenceCustom(e.target.value);
  }
  function setPwdHandler() {
    const paramsGenPwd = {
      lowerBool: lowerLetterBool,
      upperBool: upperLetterBool,
      numbersBool: numberBool,
      symbolsBool: symbolsBool,
      length: length,
      sentence: sentenceCustom,
    };

    const string = genPwd(paramsGenPwd, isToggled);
    if (isToggled) {
      setPwdCustom(string);
      setLengthCustom(string.length);
    } else {
      setPwd(string);
    }
  }

  function setIsToggleHandler(isToggled) {
    setIsToggled(isToggled);
  }

  return (
    <>
      <div className="my-10">
        <h1 className="text-blue-12 text-2xl">Générateur de mots de passe</h1>
      </div>
      <div className="flex justify-center w-2/3 bg-blue-5 shadow-lg rounded-3xl">
        <div className="w-2/3">
          <p className="flex justify-between items-center mt-10 h-7 bg-blue-8 text-blue-12 w-full rounded-3xl indent-5 text-xs lg:text-base">
            {isToggled ? pwdCustom : pwd}
            {isToggled ? (
              pwdCustom.length != 0 ? (
                <CopyButton pasteHandler={() => pasteHandler(pwdCustom)} />
              ) : (
                ""
              )
            ) : pwd.length != 0 ? (
              <CopyButton pasteHandler={() => pasteHandler(pwd)} />
            ) : (
              ""
            )}
          </p>
          <div className="flex flex-col justify-center mt-5">
            <div className="flex justify-between">
              <label htmlFor="length">Longueur du mot de passe</label>
              <span>{isToggled ? lengthCustom : length}</span>
            </div>
            {isToggled ? (
              ""
            ) : (
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
            )}
            <div className="flex items-center justify-between">
              <span className="">Mot de passe personnalisé ?</span>
              <ToggleSwitch isToggle={setIsToggleHandler} />
            </div>

            {isToggled ? (
              <CustomPwd
                sentenceCustom={sentenceCustom}
                setSentenceCustomHandler={setSentenceCustomHandler}
              />
            ) : (
              checkboxParams.map((param) => (
                <Checkbox
                  key={param.id + "KeyGenPwd"}
                  string={param.string}
                  id={param.id}
                  checked={param.checked}
                  onChange={param.onChange}
                />
              ))
            )}
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
