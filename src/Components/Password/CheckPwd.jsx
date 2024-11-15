import { useState, useEffect } from "react";
import { checkPwd } from "../../libs/function";
import StrengthPwd from "./StrengthPwd";
import MessagePwd from "./MessagePwd";

function CheckPwd() {
  const [pwd, setPwd] = useState("");
  const [strength, setStrength] = useState("");
  const [sentence, setSentence] = useState("");

  const setPwdHandler = (e) => {
    setPwd(e.target.value);
    setStrength(checkPwd(e.target.value));
  };

  useEffect(() => {
    switch (strength) {
      case 0:
        setSentence("Médiocre : ");
        break;
      case 1:
      case 2:
        setSentence("Mauvais :");
        break;
      case 3:
        setSentence("Moyen :");
        break;
      case 4:
      case 5:
        setSentence("Bon :");
        break;
      case 6:
        setSentence("Excelent :");
        break;

      default:
        break;
    }
  }, [strength]);

  return (
    <>
      <div className="my-10">
        <h1 className="text-blue-12 text-2xl">Vérificateur de mots de passe</h1>
      </div>
      <div className="flex justify-center w-2/3 h-5/6 bg-blue-5 shadow-lg rounded-3xl">
        <div className="w-2/3">
          <input
            className="mt-10 h-7 bg-blue-8 text-blue-12 w-full rounded-3xl indent-5"
            type="text"
            value={pwd}
            onChange={setPwdHandler}
          />
          <div className="flex justify-center mt-5">
            <p className="text-blue-12 ml-4">
              {pwd == "" ? "Entrer votre mot de passe" : sentence}
            </p>
            <div className="flex ms-1">
              {pwd != "" && <StrengthPwd strength={strength} />}
            </div>
          </div>
          <div className="mt-6 flex content-center text-blue-12">
            {pwd != "" && <MessagePwd strength={strength} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckPwd;
