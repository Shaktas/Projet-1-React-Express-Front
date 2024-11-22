import { useState } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
  };

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <h2 className="text-3xl font-bold">{isLogin ? "Login" : "Sign Up"}</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        {!isLogin && (
          <input
            type="text"
            placeholder="Pseudo"
            value={formData.pseudo}
            onChange={(e) =>
              setFormData({ ...formData, pseudo: e.target.value })
            }
            className="p-2 border rounded focus:outline-none focus:border-blue-500"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <button onClick={toggleForm} className="text-blue-500 hover:underline">
        {isLogin
          ? "Need an account? Sign up"
          : "Already have an account? Login"}
      </button>
    </div>
  );
}
export default Login;
