import { useEffect, useState } from "react";
import telekomLogo from "../assets/telekomLogo.png";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const { login, error, isLoading } = useLogin();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(identifier, password);
  };


  return (
    <div className="flex h-screen items-center justify-center bg-magenta">
      <form className="flex flex-col w-80 h-80 items-center justify-around rounded-3xl bg-white p-6">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-3xl">Login</h1>
          <Link className="w-1/2" to={"/"}>
            <img src={telekomLogo} alt="Telekom Logo" className="" />
          </Link>
        </div>
        <input
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          type="text"
          placeholder="Username"
          className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
        ></input>
        <input
          value={password}
          className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
		{error && <div className="w-full text-red-600">{error}</div>}
        <button
          onClick={handleSubmit}
          className="p-1 w-20 border-2 border-magenta rounded-full bg-magenta text-white hover:bg-white hover:text-magenta hover:font-bold duration-300 ease-in-out"
        >
          Login
        </button>
        <div className="w-full flex justify-between">
          <div className="font-bold text-magenta">Not registered yet?</div>
          <Link to="/register">
            <button
              className="p-1 pl-1 w-20 border-2 text-sm border-magenta
						rounded-full bg-magenta text-white hover:bg-white
						hover:text-magenta hover:font-bold"
            >
              Register
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
