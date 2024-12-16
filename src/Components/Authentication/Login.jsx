import { useState } from "react";
import { useForm } from "react-hook-form";
import { isPwdValid } from "../../libs/function";
import { NavLink } from "react-router-dom";
import { api } from "../../api/api";
import { AuthenticateContext } from "../../Context/AuthenticateContext";
import { useContext } from "react";

function Login() {
  const { setIsAuthenticate } = useContext(AuthenticateContext);
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit() {
    if (isLogin) {
      const form = getValues(["emailRegister", "pwdRegister"]);

      const data = {
        email: form[0],
        pwd: form[1],
      };
      const login = await api.auth.login(data);
    } else {
      const form = getValues(["pseudo", "email", "pwd"]);

      const data = {
        pseudo: form[0],
        email: form[1],
        pwd: form[2],
      };

      const register = await api.auth.register(data);
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <h2 className="text-3xl font-bold">
        {isLogin ? "Connexion" : "Inscription"}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={`flex flex-col gap-4 w-full max-w-md ${
          !isLogin && "min-w-[28rem]"
        }`}
      >
        {!isLogin ? (
          <>
            <div className="flex flex-col text-center">
              <input
                {...register("pseudo", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "Le pseudo doit contenir au moins 3 caractères",
                  },
                  maxLength: {
                    value: 20,
                    message: "Le pseudo doit contenir au maximum 20 caractères",
                  },
                })}
                type="text"
                placeholder="Pseudo *"
                className="p-2 border rounded focus:outline-none focus:border-blue-9"
              />
              {errors.pseudo && (
                <span className="text-red-500 text-sm">
                  {errors.pseudo.message}
                </span>
              )}
            </div>
            <div className="flex flex-col text-center">
              <input
                {...register("email", {
                  required: { value: true, message: "L'email est requis" },
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "L'email n'est pas valide",
                  },
                  // validate: checkEmail,
                })}
                type="email"
                placeholder="Email *"
                className="p-2 border rounded focus:outline-none focus:border-blue-9"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col text-center">
              <input
                {...register("pwd", {
                  required: {
                    value: true,
                    message: "Le mot de passe est requis",
                  },
                  validate: {
                    strength: (value) => isPwdValid(value),
                  },
                })}
                type="password"
                placeholder="Mot de passe *"
                className="p-2 border rounded focus:outline-none focus:border-blue-9"
              />
              {errors.pwd && (
                <span className="text-red-500 text-sm">
                  {errors.pwd.message}.<br />
                  Nous vous recommandons d&apos;utiliser le{" "}
                  <NavLink
                    to={"/genPwd"}
                    className="text-red-800 hover:underline"
                  >
                    Générateur de mot de passe
                  </NavLink>
                </span>
              )}
            </div>
          </>
        ) : (
          <>
            <input
              {...register("emailRegister", {
                required: true,
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "L'email n'est pas valide",
                },
                // validate: {isEmailBdd, "Vos informations de connexions sont incorrectes"}
              })}
              type="email"
              placeholder="Email *"
              className="p-2 border rounded focus:outline-none focus:border-blue-9"
            />
            <div className="flex flex-col text-center">
              <input
                {...register("pwdRegister", {
                  required: true,
                  // validate: {isPwdBdd, "Vos informations de connexions sont incorrectes"}
                })}
                type="password"
                placeholder="Mot de passe *"
                className="p-2 border rounded focus:outline-none focus:border-blue-9"
              />
              {errors.emailRegister && (
                <span className="text-red-500 text-sm">
                  {errors.emailRegister.message}
                </span>
              )}
              {errors.pwdRegister && (
                <span className="text-red-500 text-sm">
                  {errors.pwdRegister.message}
                </span>
              )}
            </div>
          </>
        )}
        <button
          type="submit"
          className="bg-blue-9 text-white py-2 px-4 rounded hover:bg-blue-10 transition-colors"
        >
          {isLogin ? "Connexion" : "Inscription"}
        </button>
      </form>
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="text-blue-9 hover:underline"
      >
        {isLogin
          ? "Besoin d'un compte? Inscrivez-vous"
          : "Vous avez déjà un compte? Connectez-vous"}
      </button>
    </div>
  );
}

export default Login;
