import { useState } from "react";
import { countStrengthPassword } from "../../libs/function";
import { SearchIcon } from "../../assets/Svg";

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
  const [password, setPassword] = useState("");
  const [isModify, setIsModify] = useState(false);
  const pwd = countStrengthPassword(weakPasswords);
  console.log(pwd);

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-2">
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
            {isModify ? (
              <div className="flex justify-center items-centerp-2 border border-blue-5 rounded-lg focus:outline-none focus:border-blue-9 bg-blue-2">
                <input
                  type="text"
                  id="pseudo"
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                  className="w-full p-2 border border-blue-5 rounded-lg focus:outline-none focus:border-blue-9 bg-blue-2"
                />
              </div>
            ) : (
              <div className="relative">
                <p className="text-blue-12 font-semibold">{pseudo}</p>
                <div className="absolute top-0 right-2">
                  <SearchIcon fill="none" />
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-blue-12 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={() => {
                console.log("hello");
              }}
              className="w-full p-2 border border-blue-5 rounded-lg focus:outline-none focus:border-blue-9 bg-blue-2"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="p-4 rounded-lg transition-colors bg-red-400">
            <h3 className="font-semibold flex items-center justify-center mb-1">
              Weak Password
            </h3>
            <p className="text-sm flex items-center justify-center">
              {pwd.weak}
            </p>
          </div>
          <div className="p-4 rounded-lg transition-colors bg-white border-2 border-blue-5">
            <h3 className="flex items-center justify-center font-semibold mb-1">
              Normal Password
            </h3>
            <p className="flex items-center justify-center text-sm">
              {pwd.normal}
            </p>
          </div>
          <div className="p-4 rounded-lg transition-colors bg-green-300">
            <h3 className="flex items-center justify-center font-semibold mb-1">
              Strong Password
            </h3>
            <p className="flex items-center justify-center text-sm">
              {pwd.strong}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profil;
