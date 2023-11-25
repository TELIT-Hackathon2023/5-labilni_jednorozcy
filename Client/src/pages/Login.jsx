import { useEffect, useState } from "react";
import telekomLogo from "../assets/telekomLogo.png";
import { Link } from "react-router-dom";

export default function Login() {
	const [username, setUsername] = useState(() => {
		const localValue = localStorage.getItem("username");
		if (localValue == null) return "";
		return JSON.parse(localValue);
	});

	useEffect(() => {
		localStorage.setItem("username", JSON.stringify(username));
	}, [username]);

	return (
		<div className="flex h-screen items-center justify-center bg-magenta">
			<form className="flex flex-col w-80 h-80 items-center justify-around rounded-3xl bg-white p-6">
				<div className="flex flex-row justify-between">
					<h1 className="font-bold text-3xl">Login</h1>
					<img
						src={telekomLogo}
						alt="Telekom Logo"
						className="w-1/2"
					/>
				</div>
				<input
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="Username"
					className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
				></input>
				<input
					className="w-full p-1 pl-3 bg-gray-300 text-gray-600 rounded-full"
					placeholder="Password"
					type="password"
				></input>
				<button className="p-1 w-20 border-2 border-magenta rounded-full bg-magenta text-white hover:bg-white hover:text-black hover:font-bold">
					Login
				</button>
				<div className="w-full flex justify-between">
					<div className="font-bold text-magenta">
						Not registered yet?
					</div>
					<Link to="/register">
						<button className="p-1 pl-1 w-20 border-2 text-sm border-magenta
						rounded-full bg-magenta text-white hover:bg-white
						hover:text-black hover:font-bold">Register</button>
					</Link>
				</div>
			</form>
		</div>
	);
}
