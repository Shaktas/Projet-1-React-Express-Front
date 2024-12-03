import { useState } from "react";
import { countStrengthPassword } from "../../libs/function";
import EditButton from "../ActionComponents/EditButton";
import Vault from "../Vaults/Vault";

const weakPasswords = [
  "123456",
  "password",
  "qwerty",
  "abc123",
  "letmein",
  "admin",
  "welcome",
  "monkey",
  "football",
  "12345",
];

const Profil = () => {
  const [pseudo, setPseudo] = useState("JohnDoe");
  const [password, setPassword] = useState("HelloWorld");
  const [isModifyPseudo, setIsModifyPseudo] = useState(false);
  const [isModifyPwd, setIsModifyPwd] = useState(false);
  const pwd = countStrengthPassword(weakPasswords);
  console.log(pwd);

  function clickPseudoHandler() {
    setIsModifyPseudo(!isModifyPseudo);
  }
  function clickPwdHandler() {
    setIsModifyPwd(!isModifyPwd);
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-2/3 bg-blue-2">
      <div className="bg-blue-1 p-8 rounded-3xl shadow-lg w-full max-w-2xl">
        <div className="flex justify-center mb-8">
          <img
            src="/default-profile.png"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-6"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="pseudo" className="text-blue-12 font-semibold">
              Pseudo
            </label>
            {isModifyPseudo ? (
              <div className="relative flex justify-center items-centerp-2 border border-blue-5 rounded-lg focus:outline-none focus:border-blue-9 bg-blue-2">
                <input
                  type="text"
                  id="pseudo"
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setIsModifyPseudo(!isModifyPseudo);
                    }
                  }}
                  className="w-full p-2 border border-blue-5 rounded-lg focus:outline-none focus:border-blue-9 bg-blue-2"
                />
                <div className="absolute top-1 right-2 z-10">
                  <EditButton clickHandler={clickPseudoHandler} />
                </div>
              </div>
            ) : (
              <div className="relative">
                <p className="text-blue-12 font-semibold">{pseudo}</p>
                <div className="absolute top-0 right-2">
                  <EditButton clickHandler={clickPseudoHandler} />
                </div>
              </div>
            )}
          </div>
          <div className="relative space-y-2">
            <label htmlFor="password" className="text-blue-12 font-semibold">
              Password
            </label>

            {isModifyPwd ? (
              <>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full p-2 border border-blue-5 rounded-lg focus:outline-none focus:border-blue-9 bg-blue-2"
                />
                <div className="absolute top-0 right-2">
                  <EditButton clickHandler={clickPwdHandler} />
                </div>
              </>
            ) : (
              <div className="relative">
                <p className="text-blue-12 font-semibold">{password}</p>
                <div className="absolute top-0 right-2">
                  <EditButton clickHandler={clickPwdHandler} />
                </div>
              </div>
            )}
          </div>
          <Vault name="My Vault" passwordCount={5} userCount={3} />
        </div>
      </div>
    </div>
  );
};
export default Profil;
