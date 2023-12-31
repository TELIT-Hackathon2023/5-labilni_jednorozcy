import telekomLogo from "../assets/telekomLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Register = () => {
  const { signup, error, isLoading } = useSignup();
  const [firstname, setFirstName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [personalID, setPersonalID] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [reTypePassword, setReTypePassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(
      firstname,
      surname,
      email,
      personalID,
      phone,
      password,
      reTypePassword
    );
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-magenta">
			<form className="grid max-w-3xl p-8 mx-auto bg-white rounded-3xl shadow-md">
				<div className="flex flex-row justify-around mb-8 mt-1 items-center">
					<h1 className="font-bold text-2xl">Register</h1>
					<Link className="w-1/4" to={"/"}>
						<img
							src={telekomLogo}
							alt="Telekom Logo"
							className=""
						/>
					</Link>
				</div>
				<div className="grid gap-6 grid-cols-2">
					<input
						placeholder="Firstname"
            type="text"
            className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <input
            placeholder="Surname"
            type="text"
            className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
            value={surname}
            onChange={(e) => setSurName(e.target.value)}
          ></input>
          <input
            placeholder="Email"
            type="email"
            className="col-span-2 w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            placeholder="Personal ID"
            type="text"
            className="col-span-2 w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
            value={personalID}
            onChange={(e) => setPersonalID(e.target.value)}
          ></input>
          <input
            placeholder="Phone Number"
            type="tel"
            className="col-span-2 w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <input
            placeholder="Password"
            type="password"
            className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            placeholder="Retype Password"
            type="password"
            className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
            value={reTypePassword}
            onChange={(e) => setReTypePassword(e.target.value)}
          ></input>
        </div>
				{error && <div className="justify-self-center w-full text-red-600">{error}</div>}
        <button
          onClick={handleSubmit}
          className="justify-self-center p-1.5 pl-1 mt-6 w-40 border-2 text-sm border-magenta
						rounded-full bg-magenta text-white hover:bg-white
						hover:text-magenta hover:font-bold duration-300 ease-in-out"
				>
					Register
				</button>
				<div className="mt-6 items-center w-full flex justify-around">
					<div className="font-bold text-magenta">
						Already registered?
					</div>
					<Link to="/login">
						<button
							className="p-1.5 pl-1 w-20 border-2 text-sm border-magenta
							rounded-full bg-magenta text-white hover:bg-white
							hover:text-magenta hover:font-bold duration-300 ease-in-out"
						>
							Login
						</button>
					</Link>
				</div>
			</form>
		</div>
  );
};

export default Register;
