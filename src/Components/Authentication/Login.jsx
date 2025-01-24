import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { isPwdValid } from "../../libs/function";
import { NavLink } from "react-router-dom";
import { api } from "../../api/api";
import { AuthenticateContext } from "../../Context/AuthenticateContext";
import { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Tooltip from "../Tooltip";
import { TooltipContext } from "../../Context/TooltipContext";

function Login() {
  const { isAuthenticate, setIsAuthenticate } = useContext(AuthenticateContext);
  const { tooltips, setTooltipSuccess } = useContext(TooltipContext);
  const [errorAuth, setErrorAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [rgpd, setRgpd] = useState(false);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    reset();
  }, [isLogin, reset]);

  if (isAuthenticate) {
    return <Navigate to="/account" replace />;
  }

  async function onSubmit() {
    if (isLogin) {
      const form = getValues(["emailAuth", "pwdAuth"]);

      const data = {
        email: form[0],
        pwd: form[1],
      };
      const login = await api.auth.login(data);
      console.log(login.success);

      if (login.success) {
        sessionStorage.setItem("userId", login.user.userId);
        setIsAuthenticate(true);
        navigate("/account");
      }
    } else {
      const form = getValues([
        "pseudoRegister",
        "emailRegister",
        "pwdRegister",
      ]);

      const data = {
        pseudo: form[0],
        email: form[1],
        pwd: form[2],
      };
      const register = await api.auth.register(data);

      if (register.success == true) {
        sessionStorage.setItem("userId", register.user.userId);
        setIsAuthenticate(true);
        navigate("/account");
      }
    }
  }

  function onError(errors) {
    setErrorAuth(true);
    setTooltipSuccess(true);
  }

  console.log(tooltips.errorAuth);

  return (
    <>
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
                  {...register("pseudoRegister", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "Le pseudo doit contenir au moins 3 caractères",
                    },
                    maxLength: {
                      value: 20,
                      message:
                        "Le pseudo doit contenir au maximum 20 caractères",
                    },
                  })}
                  type="text"
                  placeholder="Pseudo *"
                  className="p-2 border rounded focus:outline-none focus:border-blue-9"
                />
                {errors.pseudoRegister && (
                  <span className="text-red-500 text-sm">
                    {errors.pseudoRegister.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col text-center">
                <input
                  {...register("emailRegister", {
                    required: { value: true, message: "L'email est requis" },
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "L'email n'est pas valide",
                    },
                  })}
                  type="email"
                  placeholder="Email *"
                  className="p-2 border rounded focus:outline-none focus:border-blue-9"
                />
                {errors.emailRegister && (
                  <span className="text-red-500 text-sm">
                    {errors.emailRegister.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col text-center">
                <input
                  {...register("pwdRegister", {
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
                {errors.pwdRegister && (
                  <span className="text-red-500 text-sm">
                    {errors.pwdRegister.message}.<br />
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
                {...register("emailAuth", {
                  required: true,
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "L'email n'est pas valide",
                  },
                })}
                type="email"
                placeholder="Email *"
                className="p-2 border rounded focus:outline-none focus:border-blue-9"
              />
              <div className="flex flex-col text-center">
                <input
                  {...register("pwdAuth", {
                    required: true,
                  })}
                  type="password"
                  placeholder="Mot de passe *"
                  className="p-2 border rounded focus:outline-none focus:border-blue-9"
                />
                {errors.emailAuth && (
                  <span className="text-red-500 text-sm">
                    {errors.emailAuth.message}
                  </span>
                )}
                {errors.pwdAuth && (
                  <span className="text-red-500 text-sm">
                    {errors.pwdAuth.message}
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
          {isLogin ? (
            ""
          ) : (
            <div className="flex justify-center items-center space-x-2">
              <input
                type="checkbox"
                id="rgpd"
                className="w-4 h-4 rounded border-blue-5 text-blue-9 focus:ring-blue-6"
                checked={rgpd}
                onChange={() => {
                  setRgpd(!rgpd);
                }}
              />
              <label htmlFor="rgpd" className="text-sm text-blue-12">
                En ciquant j&apos;accepte la{" "}
                <NavLink
                  to="/politiqueProtection"
                  className="text-blue-9 hover:underline"
                >
                  politique de protection des données
                </NavLink>
              </label>
            </div>
          )}
        </form>
        {errorAuth ? (
          <NavLink
            className="text-blue-9 hover:underline"
            to={"/forget-password"}
          >
            Mot de passe oublié ? cliquez ici
          </NavLink>
        ) : (
          ""
        )}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-9 hover:underline"
        >
          {isLogin
            ? "Besoin d'un compte? Inscrivez-vous"
            : "Vous avez déjà un compte? Connectez-vous"}
        </button>
      </div>
    </>
  );
}

export default Login;
